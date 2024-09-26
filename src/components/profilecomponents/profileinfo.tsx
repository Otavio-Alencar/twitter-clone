import { user } from '@/data/user'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Link2 } from 'lucide-react'
import Link from 'next/link'
export const ProfileInfo = () => {
  const isMe = true
  return (
    <div className="w-full border-b border-gray-900 pb-5">
      <div
        className="h-36 w-full bg-gray-500 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(' + user.cover + ')' }}
      ></div>
      <div className="flex flex-col gap-5 px-5">
        <div className="flex justify-between">
          <div className="-mt-12">
            <Avatar className="h-24 w-24">
              <AvatarImage className="h-24 w-24" src={user.avatar} />
            </Avatar>
          </div>
          <div className="pt-2">
            <Button className="rounded-3xl px-5 text-sm">
              {isMe ? 'Editar Perfil' : 'Seguir'}
            </Button>
          </div>
        </div>
        <div>
          <h1 className="max-w-full truncate text-xl font-bold">{user.name}</h1>
          <p className="text-sm text-gray-500">@{user.slug}</p>
        </div>
        <p className="text-gray-500">{user.bio}</p>
        <Link href={user.link} target="_blank" className="flex gap-2">
          <Link2 />
          <p className="text-blue-400">{user.link}</p>
        </Link>
        <div className="flex gap-4">
          <p className="text-gray-500">
            <span className="text-white">99</span> seguindo
          </p>
          <p className="text-gray-500">
            <span className="text-white">99</span> seguidores
          </p>
        </div>
      </div>
    </div>
  )
}
