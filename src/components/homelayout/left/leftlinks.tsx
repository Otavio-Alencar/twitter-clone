import { HouseIcon, UserRound } from 'lucide-react'
import { LinkNav } from './leftnav'

export const LeftLinks = () => {
  return (
    <div className="flex flex-col gap-6">
      <LinkNav href={'/home'} icon={<HouseIcon />} label="Página Inicial" />
      <LinkNav href={'/profile'} icon={<UserRound />} label="Perfil" />
    </div>
  )
}
