'use client'
import { user } from '@/data/user'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { useRouter } from 'next/navigation'

export const ProfileLink = () => {
  const router = useRouter()
  const handleClickroute = () => {
    router.push('/profile/' + user.slug)
  }
  return (
    <div
      className="flex cursor-pointer items-center gap-3"
      onClick={handleClickroute}
    >
      <Avatar>
        <AvatarImage src={user.avatar} />
      </Avatar>
      <div>
        <h1 className="truncate text-[14px]">{user.name}</h1>
        <p className="truncate text-sm text-gray-500">@{user.slug}</p>
      </div>
    </div>
  )
}
