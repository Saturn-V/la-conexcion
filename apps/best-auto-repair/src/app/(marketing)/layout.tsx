import { Inter } from 'next/font/google'

import '../globals.css'
import styles from './layout.module.css'
import FacebookPixel from '../components/FacebookPixel'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Best Auto Repair',
  description: 'San Jose - Best Auto Repair',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
        <main className={styles.main}>
            {children}
        </main>
        <FacebookPixel/>
      </body>
    </html>
  )
}
