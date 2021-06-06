import { VStack } from '@chakra-ui/react'

import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Search from '@/components/Search'

const HomePage = () => (
  <Container>
    <VStack spacing={7} align="start" px={[4, 0]}>
      <Hero />
      <Search />
    </VStack>
  </Container>
)

export default HomePage
