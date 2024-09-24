import Image from 'next/image'
import Link from 'next/link'

type props = {
  size: number
}
export const Logo = ({ size }: props) => {
  return (
    <Link href={'/'}>
      <Image
        src={'/images/logo.png'}
        alt="logo clone-twitter"
        width={size}
        height={size}
      />
    </Link>
  )
}
