import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProfileLink } from '../left/profilelink'
import { Button } from '@/components/ui/button'
import { RecommendSkeleton } from './recommendSkeleton'

export const Recommendations = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Quem seguir</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex gap-3">
          <ProfileLink />
          <Button className="rounded-3xl text-sm">Seguir</Button>
        </div>
        <RecommendSkeleton />
      </CardContent>
    </Card>
  )
}
