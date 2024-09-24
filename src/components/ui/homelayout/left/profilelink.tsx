'use client'
import { user } from '@/data/user'
import { Avatar, AvatarImage } from '../../avatar'
import { useRouter } from 'next/navigation'

export const ProfileLink = () => {
  const router = useRouter()
  const handleClickroute = () => {
    router.replace('/profile')
  }
  return (
    <div
      className="flex cursor-pointer items-center gap-5"
      onClick={handleClickroute}
    >
      <Avatar>
        <AvatarImage src={user.avatar} />
      </Avatar>
      <div>
        <h1>{user.name}</h1>
        <p className="text-sm text-gray-500">@{user.slug}</p>
      </div>
    </div>
  )
}
