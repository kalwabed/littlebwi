import { Box, Button, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'

import Container from './Container'
import { GlobeIcon, InstagramIcon } from './icons'

const Card = () => {
  return (
    <Container borderBottom="1px" pb={2} borderBottomColor="gray.300">
      <HStack align="start" spacing={4}>
        <Image src="https://picsum.photos/200" width={220} height={220} />

        <Flex direction="column">
          <Heading fontSize={['xl', '2xl']}>Kopi Konco</Heading>
          {/* <Text as="cite">Genteng</Text> */}
          <Text mt={1} fontWeight="light" fontSize={['md', 'lg']} color="gray.600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic suscipit facilis soluta
          </Text>

          <HStack mt={1}>
            <Link
              isExternal
              href="/"
              px={0.5}
              border="1px"
              borderColor="gray.200"
              bgColor="gray.100"
              rounded="sm"
              _hover={{ textDecor: '', bgColor: 'gray.200' }}
            >
              <Box display="inline-flex" alignItems="center">
                <InstagramIcon mr={0.5} />
                <span>Instagram</span>
              </Box>
            </Link>

            <Link
              isExternal
              href="/"
              px={0.5}
              border="1px"
              borderColor="gray.200"
              bgColor="gray.100"
              rounded="sm"
              _hover={{ textDecor: '', bgColor: 'gray.200' }}
            >
              <Box display="inline-flex" alignItems="center">
                <GlobeIcon mr={0.5} />
                <span>Web</span>
              </Box>
            </Link>
          </HStack>
        </Flex>
      </HStack>
    </Container>
  )
}

export default Card
