import { HeaderMenu } from '@/components/homepage/header'
import { TweetItem } from '@/components/homepage/tweet-item'
import { TweetPost } from '@/components/homepage/tweet-post'

const page = () => {
  return (
    <div className="">
      <HeaderMenu />
      <TweetPost />
      <TweetItem />
    </div>
  )
}

export default page
