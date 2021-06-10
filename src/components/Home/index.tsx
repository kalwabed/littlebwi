import { Divider, VStack } from '@chakra-ui/react'

import { Item } from '@/lib/supabase'
import Banner from '../Banner'
import About from './About'
import Hero from './Hero'
import Search from './Search'
import ItemsSkeleton from './ItemsSkeleton'
import ItemList from './ItemList'

const HomePageRenderer = ({ items }: { items: Item[] }) => {
  return (
    <VStack spacing={7} align="start" px={[4, 0]}>
      <Hero />
      <Search />
      {!items && <ItemsSkeleton />}

      <ItemList items={items} />

      <Banner />
      <About />
      <Divider />
    </VStack>
  )
}

export default HomePageRenderer
