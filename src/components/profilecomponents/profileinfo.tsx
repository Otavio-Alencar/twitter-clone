import { user } from '@/data/user'

import { Link2 } from 'lucide-react'
import Link from 'next/link'

export const ProfileInfo = () => {
  return (
    <div className="w-full border-b border-gray-900 pb-5">
      <div className="flex flex-col gap-5 px-5">
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
