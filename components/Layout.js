import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Layout.module.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Showcase from './Showcase'
const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'DJ Events | Find Parties',
  description: 'Find some music',
  keywords: 'music, dj, events,',
}
