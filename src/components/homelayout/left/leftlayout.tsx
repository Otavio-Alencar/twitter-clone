import { Logo } from '@/components/ui/logo'

import { BottomNav } from './bottomleftnav'
import { LeftLinks } from './leftlinks'

export const LeftSideLayout = () => {
  return (
    <section className="sticky top-0 hidden h-screen min-w-72 items-start justify-between border-r border-popover py-10 lg:sticky lg:flex lg:flex-col">
      <div className="flex flex-col gap-12">
        <Logo size={28} />
        <LeftLinks />
      </div>
      <BottomNav />
    </section>
  )
}
