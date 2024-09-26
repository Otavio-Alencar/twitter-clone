import { BackButton } from '@/components/profilecomponents/backbutton'
import { Search } from '../homelayout/right/search'

interface searchHeaderProps {
  defaultValue: string
}
export const SearchHeader = (props: searchHeaderProps) => {
  return (
    <div className="flex items-center gap-2 border-b border-popover py-10 pl-3">
      <BackButton />
      <Search defaultValue={props.defaultValue} />
    </div>
  )
}
