import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import { useEffect, useState } from 'react'
import type { Aluno } from './types/aluno'
import { atualizarAluno, buscarTurma } from './services/turma'
import Cabecalho from './components/Cabecalho'
import Chamada from './components/Chamada'
import Entregas from './components/Entregas'
import FichaAluno from './components/FichaAluno'
import NaoEncontrado from './components/NaoEncontrado'

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [salvando, setSalvando] = useState(false)
  const [salvo, setSalvo] = useState(false)
  const [erroSalvar, setErroSalvar] = useState('')

  useEffect(() => {
    async function carregar() {
      setCarregando(true)
      setErro('')
      try {
        const dados = await buscarTurma()
        setAlunos(dados)
      } catch (falha) {
        setErro(falha instanceof Error ? falha.message : 'Não foi possível carregar a turma.')
      } finally {
        setCarregando(false)
      }
    }

    carregar()
  }, [])

  async function marcarPresenca(id: number) {
    const aluno = alunos.find(item => item.id === id)
    if (aluno === undefined) return
    setSalvando(true)
    setSalvo(false)
    setErroSalvar('')
    try {
      const atualizado = await atualizarAluno(id, { presente: !aluno.presente })
      setAlunos(anteriores => anteriores.map(item => item.id === id ? atualizado : item))
      setSalvo(true)
    } catch (falha) {
      setErroSalvar(falha instanceof Error ? falha.message : 'Não foi possível salvar.')
    } finally {
      setSalvando(false)
    }
  }

  async function registrarEntrega(id: number) {
    const aluno = alunos.find(item => item.id === id)
    if (aluno === undefined) return
    setSalvando(true)
    setSalvo(false)
    setErroSalvar('')
    try {
      const atualizado = await atualizarAluno(id, { entregas: aluno.entregas + 1 })
      setAlunos(anteriores => anteriores.map(item => item.id === id ? atualizado : item))
      setSalvo(true)
    } catch (falha) {
      setErroSalvar(falha instanceof Error ? falha.message : 'Não foi possível salvar.')
    } finally {
      setSalvando(false)
    }
  }

  const terminou = !carregando && !erro
  const vazia = terminou && alunos.length === 0

  return (
    <BrowserRouter>
      <div className="painel">
        <Cabecalho />
        <nav className="abas" aria-label="Telas do painel">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'aba ativa' : 'aba')}>Chamada</NavLink>
          <NavLink to="/entregas" className={({ isActive }) => (isActive ? 'aba ativa' : 'aba')}>Entregas</NavLink>
        </nav>

        <main>
          <p className="aviso" role="status" aria-live="polite">
            {carregando && <span>carregando a turma...</span>}
            {vazia && <span>A turma chegou vazia: ainda não há nenhum aluno para mostrar.</span>}
          </p>
          <p className="erro" role="alert" aria-live="assertive">{erro}</p>
          <div className="salvar">
            <p className="aviso" role="status" aria-live="polite">
              {salvando && <span>salvando...</span>}
              {salvo && <span>salvo</span>}
            </p>
            <p className="erro" role="alert" aria-live="assertive">{erroSalvar}</p>
          </div>

          {terminou && !vazia && <Routes>
            <Route path="/" element={<Chamada alunos={alunos} onPresenca={marcarPresenca} salvando={salvando} />} />
            <Route path="/entregas" element={<Entregas alunos={alunos} onEntrega={registrarEntrega} salvando={salvando} />} />
            <Route path="/aluno/:id" element={<FichaAluno alunos={alunos} carregando={carregando} />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>}
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App