import { Box, BoxProps } from '@chakra-ui/react'

interface ContainerProps extends BoxProps {
  isFullWidth?: boolean
}

const Container = (props: ContainerProps) => {
  return (
    <Box maxW={['lg', 'xl', '4xl', '6xl']} mx="auto" {...props}>
      {props.children}
    </Box>
  )
}

export default Container
