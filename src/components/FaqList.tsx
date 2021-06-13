import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Link } from '@chakra-ui/react'

const faqs = [
  {
    ask: '1x1 =?',
    answer: (
      <p>
        hai saya ada link{' '}
        <Link href="href" color="blue.500">
          ini
        </Link>
      </p>
    )
  },
  { ask: '1+1 =?', answer: '2' },
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
