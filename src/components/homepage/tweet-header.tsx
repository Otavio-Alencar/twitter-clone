import { BackButton } from '@/components/profilecomponents/backbutton'

export const TweetHeader = () => {
  return (
    <div className="flex items-center gap-2 border-b border-popover py-10 pl-3">
      <BackButton />
      <p className="text-lg font-bold">Voltar</p>
    </div>
  )
}
