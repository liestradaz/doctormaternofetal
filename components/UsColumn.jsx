import { Wrap, WrapItem, Center, SimpleGrid, Heading, Text, UnorderedList, ListItem, Box, Container } from '@chakra-ui/react'
  import Image from "next/image";
  
  const valores = ["Responsabilidad", "Calidad en la atención médica", "Profesionalismo", "Vocación de servicio", "Ética profesional", "Integridad", "Innovación en el diagnóstico prenatal", "Honestidad", "Amabilidad", "Calidez humana"]
  
  export default function UsColumn() {

    return (
      <>
       <Container maxW='5xl' centerContent my={10}>
            <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
                <Box >
                    <Heading size='md' textAlign="center" mb={4} color={"blue.400"}>Misión </Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Brindar atención médica de alta especialidad a las mujeres embarazadas y no embarazadas, con la mayor calidad e innovación tecnológica y actualización médica continua. Te brindaremos un cuidado y atención médica personalizada con profesionalismo y calidez humana. Desarrollar los hábitos de vida saludable en el vínculo materno-fetal.
                    </Text>
                </Box>
                <Box >
                    <Heading size='md' textAlign="center" mb={4} color={"blue.400"}>Visión </Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Ofrecer la mejor experiencia de atención médica a toda mujer durante sus diferentes etapas de vida, manteniendo la mejor vigilancia en salud y actualización médica con la finalidad de brindar alta calidad en todos nuestros servicios.
                    </Text>
                </Box>
                <Box >
                    <Heading size='md' textAlign="center" mb={4} color={"blue.400"}>Valores </Heading>
                        <UnorderedList>
                            {valores.map((elem, idx) => <ListItem key={idx}><Text color={'gray.500'} fontSize={'lg'}>{elem}</Text></ListItem> )}
                        </UnorderedList>
                </Box>
            </SimpleGrid>
            </Container>
      </>
    );
  }
  