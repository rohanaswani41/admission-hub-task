import Head from 'next/head'
import CMSFormForComponents from '../components/CMSFormForComponents/CMSFormForComponents';
import HeroComponent from '../components/HeroComponent/HeroComponent';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main class="container">
         <h2>CMS FORM FOR WEBSITE</h2>
        <CMSFormForComponents/>
      </main>

    </div>
  )
}