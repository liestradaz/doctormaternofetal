import ContactForm from "./ContactForm";
import Image from 'next/image'
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Icon,
  IconButton,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Link,
  SimpleGrid,
  AspectRatio,
  Img,
} from "@chakra-ui/react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { TimeIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import whatsapp from "../public/whatsapp.png";

export default function ContactFormBox(props) {
  return (
    <>
      <Container maxW="full" mt={5} centerContent overflow="hidden">
        <Flex>
          <Box
            /*  backgroundImage={bgnd}
            backgroundSize={"cover"}
            backgroundPosition={"center center"} */
            /*  color="white" */
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
            boxShadow={"xl"}
          >
            <Box p={4}>
              <VStack pl={0} spacing={3} alignItems="center">
                <Heading size="xl">Contacto</Heading>
                <Wrap
                  spacing={{ base: 20, sm: 2, md: 4, lg: 20 }}
                  align="center"
                >
                  <WrapItem>
                    <Container maxW="xs" borderRadius="lg" p={8} centerContent>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                            <strong>Atención Médica</strong>
                          </Text>
                          <HStack alignItems="flex-start">
                            <Icon as={MdPhone} mt={1} />
                            <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                              33 2257 9557
                            </Text>
                          </HStack>
                          <HStack alignItems="flex-start">
                            <Icon as={MdEmail} mt={1} />
                            <Link
                              href="mailto:clinicmarketgdl@hotmail.com"
                              isExternal
                            >
                              <Text>clinicmarketgdl@hotmail.com</Text>
                            </Link>
                          </HStack>
                          <HStack alignItems="flex-start">
                            <Icon as={MdLocationOn} mt={1} />
                            <Text mt={{ sm: 3, md: 3, lg: 5 }} noOfLines={5}>
                              Av. Chapalita 1373 Col. Chapalita, Guadalajara
                              Jalisco México C.P. 44500 Cruce con Av. Las Rosas.
                            </Text>
                          </HStack>
                          <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                            <strong>Citas</strong>
                          </Text>
                          <Box>
                            <Text>Lunes a Viernes: 15:00 - 20:00 hrs</Text>
                            <Text>Sábados 10:00 - 13:00 hrs</Text>
                          </Box>
                        </VStack>
                        <Box as="center" mt={4}>
                          <NextLink
                            href="https://api.whatsapp.com/send?phone=5213329171402"
                            passHref
                          >
                            <Link isExternal>
                              <Image
                                src={whatsapp}
                                alt="WhatsApp"
                                width={50} height={50}
                              />
                            </Link>
                          </NextLink>
                        </Box>
                      </Box>
                    </Container>
                  </WrapItem>

                  <WrapItem>
                    <Container maxW="xs" borderRadius="lg" centerContent>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.3143339815176!2d-103.39626067077182!3d20.659107054003993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428add7a84e99ed%3A0xe294a8f7e268ec2f!2sAv.%20Chapalita%201373%2C%20Chapalita%2C%2044500%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1657300498938!5m2!1ses-419!2smx"
                        width="300"
                        height="300"
                        style={{ border: 0 }}
                        /* allowfullscreen="" */
                        loading="lazy"
                        /* referrerpolicy="no-referrer-when-downgrade" */
                      ></iframe>
                    </Container>
                  </WrapItem>
                </Wrap>
              </VStack>
              <Box bg="white" borderRadius="lg">
                <ContactForm />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}
