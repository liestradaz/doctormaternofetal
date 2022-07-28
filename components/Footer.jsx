import {
  Box,
  Text,
  Stack,
  HStack,
  Container,
  SimpleGrid,
  Link,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import logo from "../public/images/mmfg-logo.png";
import Image from "next/image";
import NextLink from "next/link";
import whatsapp from "../public/whatsapp.png";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <Box mt={10} as="Center" bg={"#303036"}>
        <Container maxW={"6xl"} py={10} color={"white"} centerContent>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            <Stack>
              <Image src={logo} alt={"logo"} width={255} height={230} />
            </Stack>
            <Stack align={"center"}>
              <HStack alignItems="flex-start">
                <Icon as={MdPhone} mt={1} />
                  <Text>33 1984 1625</Text>
              </HStack>
              <HStack alignItems="flex-start">
                <Icon as={MdPhone} mt={1} />
                  <Text mt={{ sm: 3, md: 3, lg: 5 }}>33 3685 9362</Text>
              </HStack>
              <HStack alignItems="flex-start">
                <Icon as={AiOutlineWhatsApp} mt={1} />
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} >3329171402</Text>
              </HStack>
              <Box as="center" mt={4}>
                <NextLink
                  href="https://api.whatsapp.com/send?phone=5213329171402"
                  passHref
                >
                  <Link isExternal>
                    <Image
                      src={whatsapp}
                      alt="WhatsApp"
                      width={50}
                      height={50}
                    />
                  </Link>
                </NextLink>
              </Box>
              <Text noOfLines={3}>
                Av. Chapalita 1373 Col. Chapalita, Guadalajara Jalisco México
                C.P. 44500 Cruce con Av. Las Rosas.
              </Text>
            </Stack>
            <Stack align={"center"}>
              <Container maxW="xs" borderRadius="lg" centerContent>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.3143339815176!2d-103.39626067077182!3d20.659107054003993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428add7a84e99ed%3A0xe294a8f7e268ec2f!2sAv.%20Chapalita%201373%2C%20Chapalita%2C%2044500%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1657300498938!5m2!1ses-419!2smx"
                  width="230"
                  height="230"
                  style={{ border: 0 }}
                  /* allowfullscreen="" */
                  loading="lazy"
                  /* referrerpolicy="no-referrer-when-downgrade" */
                ></iframe>
              </Container>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
