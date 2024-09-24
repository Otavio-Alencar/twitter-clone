'use client'

import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Button } from '../button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleClickSignIn = () => {
    router.replace('/home')
  }
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <Input
          placeholder="Seu E-mail"
          onChange={(t) => setEmail(t)}
          value={email}
        />
        <Input
          placeholder="Sua Senha"
          password={true}
          onChange={(t) => setPassword(t)}
          value={password}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <Link
          href={'/signup'}
          className="cursor-pointer text-gray-500 hover:underline"
        >
          Ainda não tem uma conta?
        </Link>
        <Button onClick={handleClickSignIn} size={'lg'}>
          Entrar
        </Button>
      </div>
    </div>
  )
}
