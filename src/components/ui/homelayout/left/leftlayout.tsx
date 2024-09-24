import { Logo } from '../../logo'

import { BottomNav } from './bottomleftnav'
import { LeftLinks } from './leftlinks'

export const LeftSideLayout = () => {
  return (
    <section className="hidden h-screen w-72 items-start justify-between border-r border-gray-500 py-10 lg:sticky lg:flex lg:flex-col">
      <div className="flex flex-col gap-12">
        <Logo size={28} />
        <LeftLinks />
      </div>
      <BottomNav />
    </section>
  )
}
