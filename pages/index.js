import Head from 'next/head'
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>hello</title>
      </Head>
      <h1>hello</h1>
      <Link href="/about">hello world</Link>
    </div>
  )
}
