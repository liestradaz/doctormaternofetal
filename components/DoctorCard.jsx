import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import draines from "../public/images/dra-ines.jpg"

export default function DoctorCard(props) {
  const { title, text, image } = props;

  return (
    <>
      <Container maxW={"5xl"} p={10} centerContent boxShadow={"2xl"} mb={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} justify="center">
            <Heading textAlign="center">DRA. MARIA INES ESTRADA SOLORIO</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Médico con especialidad en Ginecología y Obstetricia por la Universidad de Guadalajara, con Junior Fellow en Medicina Materno Fetal por el Hospital Vall d’ Hebron en Barcelona España, Doctorado en Ginecología y Obstetricia por la Universidad Autónoma de Barcelona, certificada por la Fetal Medicine Fundation de Londres Inglaterra, Diplomado en Bariatría Clínica por el Instituto de Bariatría Clínica y Nutrición Metabólica de Jalisco.            </Text>
          </Stack>
          <Flex alignItems='center' justifyContent="center">
            <Box as="center" boxSize={"md"}  position="relative">
                <Image src={draines} alt={"Dra. Ines"} layout="fill" sizes="50vw" objectFit="cover" /* width={"100%"} height={"100%"} *//>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}
