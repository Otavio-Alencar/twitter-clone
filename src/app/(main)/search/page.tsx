import { TweetItem } from '@/components/homepage/tweet-item'
import { SearchHeader } from '@/components/search/searchHeader'
import { tweet } from '@/data/tweet'
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
      <TweetItem tweet={tweet} quantity={4} />
    </div>
  )
}

export default Page
