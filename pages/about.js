import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
const AboutPage = () => {
  return (
    <Layout title='About DJ Events'>
      <h1>About</h1>
      <p> Here you can find latest events</p>
      <p>version 1.0</p>
      <Link href='/'>home</Link>
    </Layout>
  )
}

export default AboutPage
