import { Heading } from '@chakra-ui/react'

import Container from '@/components/Container'
import FaqList from '@/components/FaqList'

const FaqPage = () => {
  return (
    <Container px={[4, 16]}>
      <Heading as="h1" textAlign="center">
        Pertanyaan
      </Heading>
      <FaqList />
    </Container>
  )
}

export default FaqPage
