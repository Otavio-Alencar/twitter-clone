import { TweetItem } from '@/components/homepage/tweet-item'
import { SearchHeader } from '@/components/search/searchHeader'
import { redirect } from 'next/navigation'

type Props = {
  searchParams: {
    q: string | undefined
  }
}

const Page = ({ searchParams }: Props) => {
  if (!searchParams.q) redirect('/')
  return (
    <div>
      <SearchHeader defaultValue={searchParams.q} />
      <TweetItem />
    </div>
  )
}

export default Page
