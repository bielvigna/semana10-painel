import type { Aluno } from '../types/aluno'

export async function buscarTurma(): Promise<Aluno[]> {
  let frase = 'Sem conexão com o servidor da turma. Confira sua internet e recarregue a página.'
  try {
    const resposta = await fetch(import.meta.env.VITE_API_URL, {
      headers: { Accept: 'application/json' },
    })
    frase = 'O servidor respondeu com erro. Tente de novo daqui a pouco; se continuar, avise quem cuida do painel.'
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`)
    frase = 'A turma chegou num formato que o painel não entende. Avise quem cuida do painel.'
    const dados: unknown = await resposta.json()
    if (!Array.isArray(dados)) throw new Error('a resposta não é uma lista')
    return dados
  } catch (falha) {
    console.error('[buscarTurma]', falha)
    throw new Error(frase)
  }
}

export async function atualizarAluno(
  id: number,
  mudanca: Partial<Pick<Aluno, 'presente' | 'entregas'>>,
): Promise<Aluno> {
  let frase = 'Não foi possível conectar ao servidor para salvar. Confira sua internet e tente novamente.'
  try {
    const resposta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mudanca),
    })
    frase = 'O servidor recusou o salvamento. Confira os dados e tente novamente.'
    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`)
    const atualizado: Aluno = await resposta.json()
    return atualizado
  } catch (falha) {
    console.error('[atualizarAluno]', falha)
    throw new Error(frase)
  }
}