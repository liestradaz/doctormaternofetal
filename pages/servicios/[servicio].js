import { useRouter } from 'next/router'
import {
  Container,
  Flex,
  Box,
  Heading,
  Wrap,
  WrapItem,
  Button,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import ServicioBox from '../../components/ServicioBox';
import serviciosjson from "../../data/servicios.json"

export async function getStaticProps({params}) {
  const serv = serviciosjson.filter(elem => elem.titulo.toString() === params.servicio)
  return {
    props: {
      servicio: serv[0],
    },
  }
}

export async function getStaticPaths() {
  const paths = serviciosjson.map(servicio => ({
    params: {servicio: servicio.titulo.toString()}
  }))
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export default function Servicios({servicio}) {
    const router = useRouter()
    /* const { servicio } = router.query
console.log("props", props) */

  return (
    <>
      <ServicioBox servicio={servicio} />
    </>
    )
}