import { Box, Divider, Text } from '@chakra-ui/react'
import Head from 'next/head'

import Container from '@/components/Container'
import FormAddItem from '@/components/FormAddItem'
import appConfig from '@/appConfig'

const NewPage = () => {
  return (
    <Container px={[4, 16]} pb={10}>
      <Head>
        <title>Daftar baru | {appConfig.titlePrefix}</title>
      </Head>
      <Box shadow="md" border="1px" borderColor="gray.100" p={10}>
        <Text align="center" fontSize="lg" fontWeight="semibold">
          Tambah item baru
        </Text>
        <Text align="center">lebih dikenal, lebih menjangkau banyak orang </Text>

        <Divider my={4} />

        <FormAddItem />
      </Box>
    </Container>
  )
}

export default NewPage
