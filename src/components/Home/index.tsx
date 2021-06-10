import { useState } from 'react'
import { Button, Divider, Flex, VStack } from '@chakra-ui/react'

import { Item } from '@/lib/supabase'
import Banner from '../Banner'
import About from './About'
import Card from './Card'
import Hero from './Hero'
import Search from './Search'
import ItemsSkeleton from './ItemsSkeleton'
import { useAppContext } from '@/AppContext'

const HomePageRenderer = ({ items }: { items: Item[] }) => {
  const { category, searchKey } = useAppContext()
  const [visibleItems, setVisibleItems] = useState(1)

  const filteredItems = () => {
    if (!items) return null

    if (category !== 'Semua') {
      if (searchKey) {
        return items
          .filter(item => item.category === category)
          .filter(categoryItem => categoryItem.name.toLowerCase().includes(searchKey.toLowerCase()))
      }

      return items.filter(item => item.category === category)
    }

    if (searchKey) {
      return items.filter(item => item.name.toLowerCase().includes(searchKey.toLowerCase()))
    }
    return items
  }

  const handleClickMore = () => {
    setVisibleItems(prev => prev + 2)
  }

  return (
    <VStack spacing={7} align="start" px={[4, 0]}>
      <Hero />
      <Search />
      {!items && <ItemsSkeleton />}

      {filteredItems()
        ?.slice(0, visibleItems)
        .map(item => (
          <Card key={item.id} {...item} />
        ))}

      <Flex justify="center" w="full">
        <Button
          hidden={!items || visibleItems >= filteredItems()?.length}
          isFullWidth
          colorScheme="gray"
          onClick={handleClickMore}
        >
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
