import './globals.css'

import Header from 'components/Header'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
  params: any
}) {
  return (
    <html>
      <body>
        <Header>
          <main>{children}</main>
        </Header>
      </body>
    </html>
  )
}
