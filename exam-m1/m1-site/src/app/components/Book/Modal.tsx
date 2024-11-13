
import { FC, ReactElement } from "react";
import { Button } from "./Button";

type Props = {
  children: ReactElement | ReactElement[]
  isOpen: boolean
  title: string
  onCancel: () => void
  onClose: () => void
  onOk: () => void
}

export const Modal: FC<Props> = ({ children, isOpen, title, onCancel, onClose, onOk }) => {
  return isOpen ? (
    <div>
      <div>
        <h3>{title}</h3>
        <Button onClick={onClose}>X</Button>
      </div>
      <div>{children}</div>
      <div>
        <Button onClick={onOk}>Ok</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  ) : <></>
}