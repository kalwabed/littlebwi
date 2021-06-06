import { Box, BoxProps } from '@chakra-ui/react'

interface ContainerProps extends BoxProps {
  isFullWidth?: boolean
}

const Container = (props: ContainerProps) => {
  return (
    <Box maxW={['lg', 'xl', '3xl']} w="full" mx="auto" {...props}>
      {props.children}
    </Box>
  )
}

export default Container
