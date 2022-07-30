import {
  Text,
  HStack,
  VStack,
  Flex,
  Heading,
  Container,
  Link,
  Center,
  border
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

export default function ServiceCard(props) {
  const { title, text, image } = props;

  return (
    <Container maxW="md" borderRadius="lg" p={4}>
      <HStack align="center" p={1} h={"4xs"}>
        <Flex align={"center"} justify={"center"} borderRadius={"50%"} border={"4px"} color={"teal.200"} >
          <Image
            src={image}
            alt={title}
            width={100}
            height={100}
            objectFit="cover"
            style={{ borderRadius: "50%"}}
          />
        </Flex>
        <Flex w={"70%"}>
          <VStack>
            <Heading
              size="sm"
              color={"black"}
              textAlign={"center"}
              noOfLines={2}
            >
              {title}
            </Heading>
            <Text color={"black"} textAlign={"center"} noOfLines={2}>
              {text}
            </Text>
          </VStack>
        </Flex>
      </HStack>
      <Text textAlign={"right"} color={"teal.500"}>
      <NextLink
        href={ "/servicios/" + title}
        passHref
      >
        <Link
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
          }}
        >
          Más información
        </Link>
      </NextLink>
      </Text>
    </Container>
  );
}
