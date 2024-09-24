import { LogOut } from 'lucide-react'
import { LinkNav } from './leftnav'
import { ProfileLink } from './profilelink'

export const BottomNav = () => {
  return (
    <div className="flex flex-col gap-7">
      <LinkNav href="/signin" icon={<LogOut />} label="Sair" gray={true} />
      <ProfileLink />
    </div>
  )
}
