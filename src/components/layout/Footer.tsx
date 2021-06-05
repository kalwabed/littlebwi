import { Flex, FlexProps, Text } from '@chakra-ui/react'

const Footer = (props: FlexProps) => (
  <Flex as="footer" bg="red.500" py="8rem" {...props}>
    <Text>Footer</Text>
  </Flex>
)

export default Footer
