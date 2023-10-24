import { Inter } from 'next/font/google'

import Navigation from '../components/Navigation'
import FacebookPixel from '../components/FacebookPixel'

import '../globals.css'
import styles from './layout.module.css'
import Image from 'next/image'
import classNames from 'classnames'

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
      <body className={`${inter.className}`}>

        <Navigation />

        {/* <Image
            className={styles.bg}
            src="/images/customer/home/bg.png"
            alt="Completed Project 1"
            width={750}
            height={750}
            priority
          /> */}

        <div className={styles.wrapper}>
          <main className={styles.main}>
            {children}
          </main>

          {/* <footer className={styles.footer}>
            <h4>{"Powered by"}</h4>
            <Image
              className={styles.asset}
              src="/images/logo.png"
              alt="Completed Project 1"
              width={100}
              height={50}
              priority
            />
          </footer> */}
        </div>

        <FacebookPixel/>
      </body>
    </html>
  )
}
