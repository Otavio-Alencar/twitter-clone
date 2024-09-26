import { HouseIcon, LogOut, Menu, UserRound, X } from 'lucide-react'
import { Logo } from '../ui/logo'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
import { Search } from '../homelayout/right/search'
import { LinkNav } from '../homelayout/left/leftnav'

export const MobileHeader = () => {
  return (
    <div className="flex h-full w-full items-center justify-between px-10 lg:hidden">
      <Logo size={36} />
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side={'left'} className="flex w-full flex-col gap-12">
          <SheetHeader className="items-center justify-between">
            <Logo size={36} />
            <SheetClose>
              <X />
            </SheetClose>
          </SheetHeader>
          <div>
            <Search />
          </div>
          <div className="flex flex-col gap-6">
            <LinkNav
              href={'/home'}
              icon={<HouseIcon />}
              label="Página Inicial"
            />
            <LinkNav href={'/profile'} icon={<UserRound />} label="Perfil" />
            <LinkNav href="/signin" label="Sair" icon={<LogOut />} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
