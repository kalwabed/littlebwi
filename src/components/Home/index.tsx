import { Button, Divider, Flex, VStack } from '@chakra-ui/react'

import Banner from '../Banner'
import About from './About'
import Card from './Card'
import Hero from './Hero'
import Search from './Search'

const HomePageRenderer = () => {
  return (
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
  )
}

export default HomePageRenderer
