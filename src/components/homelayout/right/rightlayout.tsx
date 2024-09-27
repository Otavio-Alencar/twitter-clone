import { Recommendations } from './recommendations'
import { Search } from './search'
import { Trendings } from './trendings'

export const RightSideLayout = () => {
  return (
    <aside className="sticky top-0 hidden h-screen min-w-72 gap-5 border-l border-popover px-5 py-10 lg:flex lg:flex-col lg:items-center">
      <Search hideOnSearch />
      <Trendings />
      <Recommendations />
    </aside>
  )
}
