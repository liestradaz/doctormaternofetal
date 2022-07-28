import * as React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Wrap,
  WrapItem,
  Text, 
  Divider,
} from "@chakra-ui/react";
import Image from 'next/image'

const basePath = "/images/servicios/"

export default function ServicioBox(props) {
  const { titulo, descripcion, imagen } = props.servicio;

  return (
    <>
      <Container maxW="full" mt={5} centerContent overflow="hidden">
        <Flex>
          <Box
            color="black"
            borderRadius="lg"
            m={{ sm: 4, md: 10, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 10 }}
            boxShadow={"2xl"}
          >
            <Box p={4}>
              <Wrap
                spacing={{ base: 2, sm: 1, md: 2, lg: 3 }}
                align="center"
                justify="center"
              >
                <WrapItem>
                  <Box w="xs" alignItems={"center"}>
                    {
                     <Image src={`${basePath}${imagen}`} alt={titulo} width={800} height={800}/> 
                    }
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Container >
                    <Heading textAlign="center" size="lg" noOfLines={2}>
                      {titulo}
                    </Heading>
                    <Divider my={3} />
                        <Text textAlign={"center"}>{descripcion}</Text>
                  </Container>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}