import { LeftSideLayout } from '@/components/homelayout/left/leftlayout'
import { RightSideLayout } from '@/components/homelayout/right/rightlayout'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="mx-auto flex min-h-screen w-full max-w-[1240px] justify-center lg:justify-between lg:px-10">
        <LeftSideLayout />
        <section>{children}</section>
        <RightSideLayout />
      </body>
    </html>
  )
}
