import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'

const About = () => {
  return (
    <VStack spacing={4} align="start">
      <Heading size="lg" as="h3">
        Tentang
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quaerat officiis molestias, labore eveniet
        obcaecati delectus necessitatibus facere consequuntur esse deleniti distinctio laboriosam iste nobis! Cumque
        consequuntur tempore quis laboriosam!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id obcaecati delectus, fugiat maiores non neque, quasi
        est blanditiis eum architecto assumenda, ea recusandae ab vitae beatae repudiandae quis! Adipisci, officia?
      </Text>
    </VStack>
  )
}

export default About
