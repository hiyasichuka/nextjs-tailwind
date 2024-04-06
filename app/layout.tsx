import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const navItems = [
  { label: 'top', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={cn(inter.className, 'min-h-dvh')}>
        <header className="bg-indigo-100 container flex  h-16 items-center justify-between">
          <h1 className="font-bold">Logo</h1>
          <nav className="bg-gray-300">
            <ul className="flex gap-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Button variant={'ghost'} asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
        <footer className="bg-pink-100 container p-5 sticky top-full">
          <p>&copy; Kei Takahashi</p>
        </footer>
      </body>
    </html>
  )
}
