import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sequencer',
  description: 'A simple music sequencer',
}

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="fr">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout
