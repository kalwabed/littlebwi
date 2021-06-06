import { Box, Button, chakra, Flex, HStack, Input, InputGroup, InputLeftElement, Tag, TagLabel } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import Container from './Container'

const categories = ['Semua', 'Kafe', 'Working space', 'Komunitas', 'Startup', 'Kuliner', 'Media']

const Search = () => {
  return (
    <Container>
      <Flex direction="column" justify="center" alignItems="center">
        <Box w={['full', '50%']}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon />
            </InputLeftElement>
            <Input placeholder="Cari tempat ngopi, kerja, dll" />
          </InputGroup>
        </Box>
        <Flex flexWrap="wrap" mt="1rem">
          {categories.map(cat => (
            <Button
              key={cat}
              size="sm"
              m={1}
              _focusWithin={{ ring: 2 }}
              variant={cat === 'Semua' ? 'solid' : 'outline'}
              colorScheme={cat === 'Semua' ? 'yellow' : 'gray'}
            >
              {cat}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Container>
  )
}

export default Search