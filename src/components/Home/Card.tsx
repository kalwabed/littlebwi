import { Box, Flex, Heading, HStack, Link, Text, Image, Skeleton } from '@chakra-ui/react'

import { GlobeIcon, InstagramIcon } from '@/components/icons'
import { Item } from '@/lib/supabase'
import { memo } from 'react'

const Card = (props: Item) => {
  const { area, description, image_key, name, socials } = props
  const imgUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${image_key}`

  return (
    <Box as="section" borderBottom="1px" pb={2} borderBottomColor="gray.300">
      <HStack align="start" spacing={4}>
        <Image
          src={imgUrl}
          boxSize="150px"
          alt={`${name} logo`}
          borderRadius="sm"
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Flex direction="column">
          <Heading fontSize={['xl', '3xl']}>{name}</Heading>
          <Text as="cite">{area}</Text>
          <Text mt={1} fontWeight="light" fontSize={['md', 'lg']} color="gray.600">
            {description}
          </Text>

          <HStack mt={1}>
            {socials?.instagram && (
              <Link
                isExternal
                href={`https://www.instagram.com/${socials.instagram}`}
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
            )}

            {socials?.web && (
              <Link
                isExternal
                href={socials.web}
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
            )}
          </HStack>
        </Flex>
      </HStack>
    </Box>
  )
}

export default memo(Card)
