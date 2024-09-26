import { user } from '@/data/user'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

export const EditInputs = () => {
  return (
    <div className="flex flex-col gap-4 px-5">
      <label>
        <p className="text-lg text-gray-500">Nome</p>
        <Input placeholder="Seu nome" value={user.name} />
      </label>
      <label>
        <p className="text-lg text-gray-500">Bio</p>
        <Textarea placeholder="Descreva você mesmo" rows={4} value={user.bio} />
      </label>
      <label>
        <p className="text-lg text-gray-500">Link</p>
        <Input placeholder="Seu nome" value={user.link} />
      </label>
      <Button className="h-14 rounded-full">Salvar alterações</Button>
    </div>
  )
}
