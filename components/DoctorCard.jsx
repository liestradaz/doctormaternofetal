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


export default function DoctorCard(props) {
  const { title, text, image } = props;

  return (
    <>
      <Container maxW={"5xl"} p={10} centerContent boxShadow={"2xl"} mb={6}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4} justify="center">
            <Heading textAlign="center" color={"blue.400"}>{title} </Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              {text}
            </Text>
          </Stack>
          <Flex alignItems='center' justifyContent="center">
            <Box as="center" boxSize={"md"}  position="relative">
                <Image src={image} alt={"Dra. Ines"} layout="fill" sizes="50vw" objectFit="cover" /* width={"100%"} height={"100%"} *//>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </>
  );
}
