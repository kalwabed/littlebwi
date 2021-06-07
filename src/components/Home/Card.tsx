import { Box, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react'
import { IKImage } from 'imagekitio-react'
import Image from 'next/image'

import { GlobeIcon, InstagramIcon } from '@/components/icons'

const Card = () => {
  return (
    <Box as="section" borderBottom="1px" pb={2} borderBottomColor="gray.300">
      <HStack align="start" spacing={4}>
        <Image src="https://picsum.photos/200" width={220} height={220} />
        <IKImage urlEndpoint="https://ik.imagekit.io/f6klfaxpzkt" path="453801468.0.0_9A75XmWJU.jpg" />
        <Flex direction="column">
          <Heading fontSize={['xl', '3xl']}>Kopi Konco</Heading>
          <Text as="cite">Genteng</Text>
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
    </Box>
  )
}

export default Card
