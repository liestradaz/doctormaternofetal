import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  ListItem,
  UnorderedList,
  Heading
} from "@chakra-ui/react";
import dataFaq from "../data/faq.json";

export default function Faq() {
  return (
    <>
      <Container maxW="2xl" mt={5} centerContent overflow="hidden">
        <Heading>Preguntas Frecuentes</Heading>
        <Accordion mt={6}>
          {dataFaq.map((data, idx) => {
            return (
              
                <AccordionItem key={idx}>
                  <h2>
                    <AccordionButton _expanded={{ bg: 'teal.100'}}>
                      <Box flex="1" textAlign="left">
                        {data.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>

                  {Array.isArray(data.answer)  ? (
                    <AccordionPanel pb={4}>
                      <UnorderedList>
                        {data.answer.map((elem, idx) => <ListItem key={idx}>{elem}</ListItem>)}
                      </UnorderedList>
                    </AccordionPanel>
                  ) : (
                    <AccordionPanel pb={4}>{data.answer}</AccordionPanel>
                  )}
                </AccordionItem>
              
            );
          })}
        </Accordion>
      </Container>
    </>
  );
}
