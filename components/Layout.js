import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import React from 'react'
import Header from './Header'
const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'DJ Events | Find Parties',
  description: 'Find some music',
  keywords: 'music, dj, events,',
}
