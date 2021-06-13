import { Box, Heading, Text } from '@chakra-ui/react'

const Hero = () => (
  <Box as="section" w={['full', '70%']}>
    <Heading as="h1" fontSize={['3xl', '6xl']}>
      Little Banyuwangi
    </Heading>
    <Text>
      Tempat dimana kamu bisa temukan kafe, barber shop, komunitas, hingga usaha-usaha startup yang ada di Banyuwangi.
    </Text>
  </Box>
)

export default Hero
