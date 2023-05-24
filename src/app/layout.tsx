import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '#boraCodar - Carrinho de Compras',
  description: 'Desafio proposto pela Rocketseat, que visa criar um layout de carrinho de compras.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-neutral-600 text-neutral-50 min-h-screen relative`}>
        <main className='flex flex-col w-full lg:w-[428px] md:w-[428px] h-full right-0 absolute'>
          {children}
        </main>
      </body>
    </html>
  )
}
