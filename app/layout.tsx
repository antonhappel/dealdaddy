import "styles/tailwind.css"
import Head from 'next/head'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <Head>
          <meta name="google-adsense-account" content="ca-pub-5795833978477067"/>
      </Head>
      <body>{children}</body>
      </html>
  )
}
