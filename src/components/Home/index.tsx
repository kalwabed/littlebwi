import { Button, Divider, Flex, Skeleton, VStack } from '@chakra-ui/react'

import { Item } from '@/lib/supabase'
import Banner from '../Banner'
import About from './About'
import Card from './Card'
import Hero from './Hero'
import Search from './Search'
import { useState } from 'react'

const HomePageRenderer = ({ items }: { items: Item[] }) => {
  const [visibleItems, setVisibleItems] = useState(1)

  const handleClickMore = () => {
    setVisibleItems(prev => prev + 2)
  }

  return (
    <VStack spacing={7} align="start" px={[4, 0]}>
      <Hero />
      <Search />
      {items?.slice(0, visibleItems).map(item => (
        <Card key={item.id} {...item} />
      ))}
      <Flex justify="center" w="full">
        {items && (
          <Button hidden={visibleItems >= items.length} isFullWidth colorScheme="gray" onClick={handleClickMore}>
            Muat lebih banyak
          </Button>
        )}
      </Flex>
      <Banner />
      <About />
      <Divider />
    </VStack>
  )
}

export default HomePageRenderer
