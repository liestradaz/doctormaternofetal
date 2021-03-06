import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Image,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
/* import logo from "../images/logo1.png"; */
import NextLink from "next/link"

const Links = [
  "inicio",
  "servicios",
  "nosotros",
  "preguntas",
  "contacto",
];

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

const NavLink = (props) => (
  <NextLink href={props.link !== "inicio" ? "/" + props.link : "/"} passHref>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {capitalize(props.link)}
    </Link>
  </NextLink>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("teal.100", "teal.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>{/* <Image src={logo} alt="Logo" htmlWidth="100px" /> */}</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} link={link} />
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} link={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
