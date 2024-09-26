import Image from 'next/image'
import { Avatar, AvatarImage } from '../ui/avatar'
import { tweet } from '@/data/tweet'
import { TweetInteractions } from './tweet-interactions'

export const TweetItem = () => {
  return (
    <div>
      {Array.from({ length: 6 }, (item, index) => (
        <div
          key={index}
          className="mt-2 w-full border-b border-b-popover px-5 py-5"
        >
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src={tweet.user.avatar} />
            </Avatar>
            <div className="flex w-full flex-col gap-3">
              <div className="flex w-full gap-2">
                <h1>{tweet.user.name}</h1>
                <p className="text-xs text-gray-500">
                  @{tweet.user.slug} - há 11 dias
                </p>
              </div>
              <div>{tweet.body}</div>
              <div className="w-full overflow-hidden rounded-md">
                {tweet.image && (
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    src={tweet.image}
                    alt="tweet image"
                  />
                )}
              </div>
              <TweetInteractions />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
