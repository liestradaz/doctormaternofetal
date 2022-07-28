import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import ServiciosGrid from '../components/ServiciosGrid'

export default function Home() {
  return (
    <>
      <Head>
        <title>Doctor Materno Fetal</title>
        <meta name="description" content="El mejor seguimiento a tu embarazo" />
        <link rel="icon" type="image/png" href="/mmfg-logo.png" />
      </Head>

      <Hero />
      <ServiciosGrid />
        
    </>
  )
}
