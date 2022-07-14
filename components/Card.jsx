import { Text, Stack, Flex, Heading, Container } from "@chakra-ui/react";
import Image from 'next/image'

export default function Card(props) {
  const { title, text, image } = props;

  return (
<Container maxW='sm'>
    <Stack align="center" p={6} rounded={"30px"} h={"3xs"}>
      <Flex
        w={20}
        h={20}
        align={"center"}
        justify={"center"}
      >
        <Image src={image} alt={title} width={100} height={100}/>
      </Flex>

      <Heading size='md' color={"blue.400"}  textAlign={"center"}>
        {title}
      </Heading>
      <Text color={"black"} textAlign={"center"}>{text}</Text>
    </Stack>
    </Container>
  );
}