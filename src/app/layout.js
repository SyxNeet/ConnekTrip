import { Suspense } from 'react'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
