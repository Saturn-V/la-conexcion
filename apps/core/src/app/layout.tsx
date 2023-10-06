import { Inter } from 'next/font/google'

import Navigation from 'ui/components/custom/Navigation'

// import './globals.css'
import 'ui/globals.css'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'La Conexcion',
  description: 'Home',
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: 'white' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' },
  // ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={`${inter.className}`}>
      {/* <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          > */}
        <Navigation logo={"LEFT"} />

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
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
