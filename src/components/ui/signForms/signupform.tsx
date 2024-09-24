'use client'

import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Button } from '../button'
import Link from 'next/link'
export const SignUpForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [date, setDate] = useState('')
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <Input
          placeholder="Seu Nome"
          onChange={(t) => setName(t)}
          value={name}
        />
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
        <Input
          placeholder="Confirme sua Senha"
          password={true}
          onChange={(t) => setPassword(t)}
          value={password}
        />
        <Input
          placeholder="Data de nascimento"
          onChange={(t) => setDate(t)}
          value={date}
        />
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <Link
          href={'/signin'}
          className="cursor-pointer text-gray-500 hover:underline"
        >
          Já tem uma conta?
        </Link>
        <Button size={'lg'}>Cadastrar</Button>
      </div>
    </div>
  )
}
