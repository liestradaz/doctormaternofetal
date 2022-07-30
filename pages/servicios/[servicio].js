import { useRouter } from 'next/router'
import ServicioBox from '../../components/ServicioBox';
import serviciosjson from "../../data/servicios.json"
import Head from 'next/head';

export async function getStaticProps({ params }) {
  const serv = serviciosjson.filter(elem => elem.titulo.toString() === params.servicio)
  return {
    props: {
      servicio: serv[0],
    },
  }
}

export async function getStaticPaths() {
  const paths = serviciosjson.map(servicio => ({
    params: { servicio: servicio.titulo.toString() }
  }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export default function Servicios({ servicio }) {
  const router = useRouter()

  return (
    <>
      <Head>
        {/*  <title>Aviso de privacidad</title> */}
        <link rel="icon" type="image/png" href="/mmfg-logo.png" />
      </Head>
      <ServicioBox servicio={servicio} />
    </>
  )
}