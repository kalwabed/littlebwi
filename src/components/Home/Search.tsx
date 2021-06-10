import { Box, Button, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import { useAppContext } from '@/AppContext'
import { useMemo } from 'react'

const categories = ['Semua', 'Kafe', 'Working space', 'Komunitas', 'Startup', 'Kuliner', 'Media']

const Search = () => {
  const { searchKey, setSearchKey, category, setCategory } = useAppContext()

  const Categories = useMemo(
    () => (
      <Flex flexWrap="wrap" mt="1rem">
        {categories.map(cat => (
          <Button
            key={cat}
            size="sm"
            m={1}
            onClick={() => setCategory(cat)}
            variant={cat === category ? 'solid' : 'outline'}
            colorScheme={cat === category ? 'yellow' : 'gray'}
          >
            {cat}
          </Button>
        ))}
      </Flex>
    ),
    [category]
  )

  const Searchers = useMemo(
    () => (
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          placeholder="Cari tempat ngopi, kerja, dll"
          value={searchKey}
          onChange={event => setSearchKey(event.target.value)}
        />
      </InputGroup>
    ),
    [searchKey]
  )

  return (
    <Flex w="full" direction="column" justify="center" alignItems="center">
      <Box w={['full', '50%']}>{Searchers}</Box>
      <Flex flexWrap="wrap" mt="1rem">
        {Categories}
      </Flex>
    </Flex>
  )
}

export default Search
