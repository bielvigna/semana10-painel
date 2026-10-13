import type { Aluno } from '../../types/aluno'

interface CartaoEntregaProps {
  aluno: Aluno
  onEntrega: (id: number) => void
  salvando?: boolean
}

function CartaoEntrega({ aluno, onEntrega, salvando = false }: CartaoEntregaProps) {
  return (
    <li className="cartao">
      <span className="nome">{aluno.nome}</span>
      <span className="contagem">{aluno.entregas}</span>
      <button onClick={() => onEntrega(aluno.id)} disabled={salvando}>+1 entrega</button>
    </li>
  )
}

export default CartaoEntrega