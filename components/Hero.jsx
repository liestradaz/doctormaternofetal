import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import bgnd from "../public/images/hero.jpg";
import NextLink from "next/link";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url(${bgnd.src})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            EL MEJOR SEGUIMIENTO A TU EMBARAZO
          </Text>
          <Stack direction={"row"}>
            <NextLink href={"/contacto"} passHref>
              <Link style={{ textDecoration: "none" }}>
                <Button
                  bg={"teal.300"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                >
                  Contacto
                </Button>
              </Link>
            </NextLink>
            <NextLink href={"/nosotros"} passHref>
              <Link style={{ textDecoration: "none" }}>
                <Button
                  bg={"whiteAlpha.300"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "whiteAlpha.500" }}
                >
                  Nosotros
                </Button>
              </Link>
            </NextLink>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
