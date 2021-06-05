import { Flex, FlexProps } from '@chakra-ui/react'

import Header from './Header'
import Footer from './Footer'

const Layout = (props: FlexProps) => {
  return (
    <>
      <Header />
      <Flex w="full" as="main" direction="column" minH="100vh" {...props}>
        {props.children}
      </Flex>
      <Footer />
    </>
  )
}

export default Layout
