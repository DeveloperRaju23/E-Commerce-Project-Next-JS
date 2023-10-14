import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/Components/Home/Hero/Hero'
import Category from '@/Components/Home/Category/Category'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
  <div>
      <Hero/>
      <Category/>
  </div>
      </main>
    </>
  )
}
