import { Button, Divider, Flex, VStack } from '@chakra-ui/react'

import Container from '@/components/Container'
import Hero from '@/components/Hero'
import Search from '@/components/Search'
import Card from '@/components/Card'
import About from '@/components/About'
import Banner from '@/components/Banner'

const HomePage = () => (
  <Container pb={10}>
    <VStack spacing={7} align="start" px={[4, 0]}>
      <Hero />
      <Search />
      {[1, 2, 3].map(x => (
        <Card key={x} />
      ))}
      <Flex justify="center" w="full">
        <Button isFullWidth colorScheme="gray">
          Muat lebih banyak
        </Button>
      </Flex>
      <Banner />
      <About />
      <Divider />
    </VStack>
  </Container>
)

export default HomePage
