import Nav from '@components/nav/Nav'
import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Category from '@components/nav/Category'
import Provider from '@components/auth/Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce Demo',
  description: 'this website is a demo ecommerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Nav />
          <Category />
          <main>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
