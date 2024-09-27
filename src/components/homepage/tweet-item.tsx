import Image from 'next/image'
import { Avatar, AvatarImage } from '../ui/avatar'

import { TweetInteractions } from './tweet-interactions'

import { Tweet } from '@/types/tweet'

interface tweetProps {
  tweet: Tweet
  quantity: number
  hideComment?: boolean
}
export const TweetItem = (props: tweetProps) => {
  return (
    <div className="mt-2">
      {Array.from({ length: props.quantity }, (item, index) => (
        <div key={index} className="border-b border-b-popover px-4">
          <div className="flex w-full gap-3 px-4 py-5">
            <Avatar className="h-10 w-10">
              <AvatarImage
                className="h-full w-full"
                src={props.tweet.user.avatar}
              />
            </Avatar>
            <div className="flex w-full flex-col gap-3">
              <div className="flex w-full gap-2">
                <h1 className="text-sm lg:text-lg">{props.tweet.user.name}</h1>
                <p className="text-xs text-gray-500">
                  @{props.tweet.user.slug} - há 11 dias
                </p>
              </div>
              <div className="text-sm lg:text-lg">{props.tweet.body}</div>
              <div className="w-full overflow-hidden rounded-md">
                {props.tweet.image && (
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    src={props.tweet.image}
                    alt="tweet image"
                  />
                )}
              </div>

              <TweetInteractions hideComment={props.hideComment} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
