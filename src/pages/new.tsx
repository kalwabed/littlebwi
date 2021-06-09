import { Box, Divider, Text } from '@chakra-ui/react'

import Container from '@/components/Container'
import FormAddItem from '@/components/FormAddItem'

const NewPage = () => {
  return (
    <Container px={16} pb={10}>
      <Box shadow="md" border="1px" borderColor="gray.100" p={10}>
        <Text align="center" fontSize="lg" fontWeight="medium">
          Siapa saja bebas menambahkan sesuatu
        </Text>

        <Divider my={4} />

        <FormAddItem />
      </Box>
    </Container>
  )
}

export default NewPage
