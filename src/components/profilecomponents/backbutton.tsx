'use client'
import { CircleArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const BackButton = () => {
  const router = useRouter()
  const handleClickExit = () => {
    router.back()
  }

  return (
    <button onClick={handleClickExit}>
      <CircleArrowLeft strokeWidth={0.75} size={64} />
    </button>
  )
}
