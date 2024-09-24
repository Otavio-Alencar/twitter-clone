import { Skeleton } from '@/components/ui/skeleton'

export const RecommendSkeleton = () => {
  return (
    <div className="flex gap-3">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="flex w-24 flex-col gap-1">
        <Skeleton className="h-6" />
        <Skeleton className="h-4" />
      </div>
    </div>
  )
}
