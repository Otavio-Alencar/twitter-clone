'use client'
import { useRouter, usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type props = {
  href: string
  icon?: ReactNode
  label: ReactNode
  gray?: boolean
  active?: boolean
}
export const LinkNav = ({ href, icon, label, gray, active }: props) => {
  const pathName = usePathname()
  const isMe = pathName === href
  const router = useRouter()
  const handleClickroute = () => {
    router.replace(href)
  }
  return (
    <button
      onClick={handleClickroute}
      className={`flex items-center gap-5 text-lg ${gray && 'text-gray-500'} ${active || isMe ? 'text-white' : 'text-white/70'} hover:text-white`}
    >
      {icon}
      {label}
    </button>
  )
}
