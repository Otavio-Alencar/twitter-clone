'use client'
import { tweet } from '@/data/tweet'
import { Heart, MessageCircle, Repeat2 } from 'lucide-react'
import { useState } from 'react'

export const TweetInteractions = () => {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(tweet.likeCount)
  const [retweeted, setRetweeted] = useState(false)
  const [retweets, setRetweets] = useState(tweet.likeCount)
  const handleClickInteraction = (
    active: boolean,
    quantity: number,
    setactive: (p: boolean) => void,
    setquantity: (q: number) => void,
  ) => {
    if (active === false) {
      setquantity(quantity + 1)
      setactive(true)
    } else {
      setquantity(quantity - 1)
      setactive(false)
    }
  }

  const handleClickLike = () => {
    handleClickInteraction(liked, likes, setLiked, setLikes)
  }
  const handleClickRetweet = () => {
    handleClickInteraction(retweeted, retweets, setRetweeted, setRetweets)
  }
  return (
    <div className="mt-2 flex justify-between">
      <div className="flex items-center gap-1 text-gray-500">
        <MessageCircle />
        <p className="text-sm">{tweet.commentCount}</p>
      </div>
      <div
        className={`flex cursor-pointer items-center gap-1 ${retweeted ? 'text-green-500' : 'text-gray-500'}`}
        onClick={handleClickRetweet}
      >
        <Repeat2 />
        <p className="text-sm">{retweets}</p>
      </div>
      <div
        onClick={handleClickLike}
        className={`flex cursor-pointer items-center gap-1 ${liked ? 'text-red-400' : 'text-gray-500'}`}
      >
        <Heart fill={liked ? '#f87171' : ''} />
        <p className="text-sm">{likes}</p>
      </div>
    </div>
  )
}
