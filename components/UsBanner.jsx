import { Flex, Heading } from '@chakra-ui/react'
  import Image from "next/image";
  import banner from "../public/images/banner-nosotros-BG.jpg"
  
  export default function UsBanner() {

    return (
      <>
     <Flex
      w={"full"}
      h={"50vh"}
      backgroundImage={`url(${banner.src})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      /* backgroundAttachment={"fixed"} */
      align="center"
      justify={"center"}
    >
        <Heading size='3xl' color={"blue.600"}>Nosotros</Heading>

      </Flex>
      </>
    );
    flex
  }
  