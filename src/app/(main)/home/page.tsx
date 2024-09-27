import { HeaderMenu } from '@/components/homepage/header'
import { TweetItem } from '@/components/homepage/tweet-item'
import { TweetPost } from '@/components/homepage/tweet-post'
import { tweet } from '@/data/tweet'

const page = () => {
  return (
    <div className="">
      <HeaderMenu />
      <TweetPost />
      <TweetItem tweet={tweet} quantity={6} hideComment={false} />
    </div>
  )
}

export default page
