import { user } from '@/data/user'
import { redirect } from 'next/navigation'

export default function Page() {
  redirect('/' + user.id)

  return null
}
