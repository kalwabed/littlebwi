import { Button, Divider, Flex, HStack, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { ViewOffIcon } from '@chakra-ui/icons'

import { Item } from '@/lib/supabase'
import { useAppContext } from '@/AppContext'

const Card = dynamic(() => import('./Card'))

const ItemList = ({ items }: { items: Item[] }) => {
  const { category, searchKey } = useAppContext()
  const [visibleItems, setVisibleItems] = useState(5)

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
    setVisibleItems(prev => prev + 3)
  }

  return (
    <>
      {filteredItems()?.length === 0 && (
        <>
          <HStack justify="center" w="full" h={20} rounded="md">
            <ViewOffIcon />
            <Text>Maaf, data tidak ditemukan</Text>
          </HStack>
          <Divider />
        </>
      )}

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
    </>
  )
}

export default ItemList
