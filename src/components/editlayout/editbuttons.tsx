import { ReactNode } from 'react'

interface editButtonProps {
  icon: ReactNode
  absolute?: boolean
}
export const EditInteractions = (props: editButtonProps) => {
  return (
    <div
      className={`${props.absolute && 'absolute'} z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#0000006a]`}
    >
      {props.icon}
    </div>
  )
}
