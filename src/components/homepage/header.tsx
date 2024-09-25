import { MobileHeader } from './mobileheader'

export const HeaderMenu = () => {
  return (
    <header className="h-24 w-full border-b border-popover">
      <MobileHeader />
      <div className="hidden h-full items-center pl-5 text-xl lg:flex">
        Página Inicial
      </div>
    </header>
  )
}
