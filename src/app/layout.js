import './globals.css'
import { Inter } from 'next/font/google'
import AppHeader from './components/app.header'
import Container from '@mui/material/Container'
import Providers from './redux/providers'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <AppHeader />
          <Container maxWidth="lg">
            {children}
          </Container>
        </body>
      </Providers>
    </html>
  )
}
