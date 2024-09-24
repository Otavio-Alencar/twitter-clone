import { LeftSideLayout } from '@/components/ui/homelayout/left/leftlayout'

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
        <aside className="hidden w-72 border-l border-gray-500 lg:flex">
          ...
        </aside>
      </body>
    </html>
  )
}
