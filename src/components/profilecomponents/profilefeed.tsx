import { tweet } from '@/data/tweet'
import { TweetItem } from '../homepage/tweet-item'

export const ProfileFeed = () => {
  return (
    <div>
      <TweetItem tweet={tweet} quantity={4} />
    </div>
  )
}
