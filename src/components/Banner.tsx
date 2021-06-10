import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <Box p={4} w="full" rounded="lg" shadow="xl" position="relative" overflow="hidden">
      <Box position="relative" zIndex={10}>
        <Text textAlign="center" color="white" fontSize={['xl', '2xl']} fontWeight="semibold">
          Mari berkontribusi menyebarkan hal positif
        </Text>
        <Flex direction="column" justify="center" align="center">
          <Link href="/new">
            <a>
              <Button mt={3} colorScheme="yellow">
                Daftar sekarang
              </Button>
            </a>
          </Link>
        </Flex>
      </Box>
      <Image
        src="/static/banner-bg.svg"
        alt="Image by https://bgjar.com/mass-circles"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </Box>
  )
}

export default Banner
