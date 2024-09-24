import Link from 'next/link'

interface TrendProps {
  label: string
  posts: number
}
export const TrendExample = (props: TrendProps) => {
  return (
    <Link href={'/search?q=' + encodeURIComponent(props.label)}>
      <h1 className="text-lg font-bold text-primary">{props.label}</h1>
      <p className="text-sm text-gray-500">{props.posts} posts</p>
    </Link>
  )
}
