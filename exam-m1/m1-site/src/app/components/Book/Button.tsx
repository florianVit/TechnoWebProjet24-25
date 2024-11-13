import { FC } from "react"

type Props = {
  children: string
  onClick: () => void
}

export const Button: FC<Props> = ({ children, onClick }) => {
  return <span onClick={onClick}>{children}</span>
}