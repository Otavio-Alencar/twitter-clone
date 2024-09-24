import { Skeleton } from '@/components/ui/skeleton'

export const TrendingSkeleton = () => {
  return (
    <div>
      {Array.from({ length: 2 }, (item, index) => (
        <div key={index} className="mb-2 flex flex-col gap-2">
          <Skeleton className="h-7 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      ))}
    </div>
  )
}
