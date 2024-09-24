import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendExample } from './trendExample'

import { TrendingSkeleton } from './trendingskeleton'

export const Trendings = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>O que está acontecendo?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <TrendExample label="#Teste" posts={124} />
        <TrendExample label="#Teste" posts={124} />
        <TrendingSkeleton />
      </CardContent>
    </Card>
  )
}
