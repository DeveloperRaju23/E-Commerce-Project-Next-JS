import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
