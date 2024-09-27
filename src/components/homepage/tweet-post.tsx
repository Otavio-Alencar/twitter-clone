'use client'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Avatar } from '../ui/avatar'
import { user } from '@/data/user'
import { Image } from 'lucide-react'
import { Button } from '../ui/button'

export const TweetPost = () => {
  const handleImageUpload = () => {}
  const handlePostClick = () => {}
  return (
    <div className="flex gap-6 border-b border-gray-900 px-8 py-6">
      <div>
        <Avatar>
          <AvatarImage src={user.avatar} />
        </Avatar>
      </div>
      <div className="w-1/2 flex-1">
        <div
          className="min-h-14 w-full text-wrap text-sm text-white outline-none empty:before:text-sm empty:before:text-gray-500 empty:before:content-[attr(data-placeholder)] lg:text-lg empty:before:lg:text-lg"
          contentEditable
          role="textbox"
          data-placeholder="O que está acontecendo?"
        ></div>
        <div className="mt-2 flex items-center justify-between">
          <div onClick={handleImageUpload} className="cursor-pointer">
            <Image />
          </div>
          <div className="pl-4">
            <Button className="rounded-3xl text-lg" onClick={handlePostClick}>
              Postar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
