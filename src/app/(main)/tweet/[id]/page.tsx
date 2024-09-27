import { TweetHeader } from '@/components/homepage/tweet-header'
import { TweetItem } from '@/components/homepage/tweet-item'
import { TweetPost } from '@/components/homepage/tweet-post'
import { tweet } from '@/data/tweet'

const Page = () => {
  return (
    <div>
      <TweetHeader />
      <TweetItem tweet={tweet} quantity={1} />
      <div className="border-y-8 border-gray-900">
        <TweetPost />
      </div>

      <TweetItem tweet={tweet} quantity={3} />
    </div>
  )
}

export default Page
