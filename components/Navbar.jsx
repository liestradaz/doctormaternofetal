import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import logo from "../public/images/mmfg-logo.png";
import NextLink from "next/link";
import serviciosjson from "../data/servicios.json";

const Links = ["inicio", "servicios", "nosotros", "preguntas", "contacto"];
const navFontWeight = 600;

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

const NavLink = (props) => (
  <>
    {props.link === "servicios" ? (
      <Menu>
        <MenuButton
          textAlign={"left"}
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          _active={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          fontWeight={navFontWeight}
        >
          Servicios <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {serviciosjson.map((serv) => (
            <MenuItem>
              <NextLink href={"/servicios/" + serv.titulo} passHref>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                >
                  {capitalize(serv.titulo)}
                </Link>
              </NextLink>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    ) : (
      <NextLink
        href={props.link !== "inicio" ? "/" + props.link : "/"}
        passHref
      >
        <Link
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          fontWeight={navFontWeight}
        >
          {capitalize(props.link)}
        </Link>
      </NextLink>
    )}
  </>
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
            <Box>
              <Image src={logo} alt={"logo"} width={50} height={50} />
            </Box>
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
          <Box maxW={"full"} pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, idx) => (
                <NavLink key={idx} link={link} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
