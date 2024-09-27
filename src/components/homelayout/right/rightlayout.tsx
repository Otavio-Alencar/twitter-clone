import { Recommendations } from './recommendations'
import { Search } from './search'
import { Trendings } from './trendings'

export const RightSideLayout = () => {
  return (
    <aside className="sticky hidden min-w-72 gap-5 border-l border-gray-700 px-5 py-10 lg:flex lg:flex-col lg:items-center">
      <Search />
      <Trendings />
      <Recommendations />
    </aside>
  )
}
