// cSpell:disable
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  Text
} from '@chakra-ui/react'

const faqs = [
  {
    ask: 'Apakah saya boleh menambahkan sesuatu?',
    answer: <Text>Boleh. Anda bisa menambahkan bisnis/usaha, komunitas, dll.</Text>
  },
  { ask: 'Apakah ada ketentuan khusus?', answer: <Text>ada</Text> },
  { ask: '1-1 =?', answer: '2' },
  { ask: '1--1 =?', answer: '2' },
  { ask: '1++1 =?', answer: '2' }
]

const FaqList = () => {
  return (
    <Accordion mt={8} defaultIndex={[0]}>
      {faqs.map(faq => (
        <AccordionItem key={faq.ask}>
          <h2>
            <AccordionButton>
              <Box textAlign="left" flex="1" fontWeight="medium">
                {faq.ask}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>{faq.answer}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FaqList
