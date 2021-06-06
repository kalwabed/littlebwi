import { VStack } from '@chakra-ui/react'

import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Search from '@/components/Search'
import Card from '@/components/Card'

const HomePage = () => (
  <Container>
    <VStack spacing={7} align="start" px={[4, 0]}>
      <Hero />
      <Search />
      {[1, 2, 3].map(x => (
        <Card key={x} />
      ))}
    </VStack>
  </Container>
)

export default HomePage
