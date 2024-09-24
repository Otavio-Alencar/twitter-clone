'use client'
import { Input } from '@/components/ui/input'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

type props = {
  defaultValue?: string
  hideOnSearch?: boolean
}
export const Search = ({ defaultValue, hideOnSearch }: props) => {
  const router = useRouter()
  const pathname = usePathname()
  const [search, setSearch] = useState(defaultValue ?? '')
  const handleSearchEnter = () => {
    router.push('/search?q=' + encodeURIComponent(search))
  }
  if (hideOnSearch && pathname === '/search') return null
  return (
    <Input
      placeholder="Buscar"
      search={true}
      value={search}
      onChange={(t) => setSearch(t)}
      onEnter={handleSearchEnter}
    />
  )
}
