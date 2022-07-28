import {
    Container,
    Heading,
    SimpleGrid,
  } from "@chakra-ui/react";
  import ServiceCard from "./ServiceCard";
  import serviciosjson from "../data/servicios.json"

  const basePath = "/images/servicios/"
  
export default function ServiciosGrid (){

    return (
        <Container maxW="5xl" my={6} >
            <Heading textAlign={"center"} mb={4} >Servicios</Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={10}>
            {serviciosjson.map(elem => <ServiceCard title={elem.titulo} text={elem.descripcion} image={`${basePath}${elem.imagen}`} /> )}
            
</SimpleGrid>
        
        </Container>
    )
}