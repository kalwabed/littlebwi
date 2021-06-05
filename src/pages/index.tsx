import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import Container from '@/components/Container'
import Hero from '@/components/Hero'

const HomePage = () => (
  <Container>
    <Flex direction="column" px={[4, 0]}>
      <Hero />
    </Flex>
  </Container>
)

export default HomePage
