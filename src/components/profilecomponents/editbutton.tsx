'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import { user } from '@/data/user'

export const EditButton = () => {
  const isMe = true

  return (
    <Link href={`/profile/${user.slug}/edit`} className="pt-2">
      <Button className="rounded-3xl px-5 text-sm">
        {isMe ? 'Editar Perfil' : 'Seguir'}
      </Button>
    </Link>
  )
}
