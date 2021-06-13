import { AddIcon } from '@chakra-ui/icons'
import { Flex, LinkProps, Text, HStack, Box, Button, ButtonProps } from '@chakra-ui/react'
import Link from 'next/link'

import Container from '../Container'

interface NavLinkProps extends ButtonProps {
  href: string
}

const NavLink = (props: NavLinkProps) => (
  <Link href={props.href} passHref>
    <Button as="a" variant="ghost" h={12} fontWeight="normal" {...props}>
      {props.children}
    </Button>
  </Link>
)

const Header = () => {
  return (
    <Container my={10} as="header">
      <Flex
        as="nav"
        direction={['column', 'row']}
        justify="space-between"
        alignItems="center"
        px={[4, 0]}
        py={[1.5, 0]}
      >
        <Box bg="black" py={1} px={3} color="white">
          <Text fontSize={['2xl', 'xl']} fontWeight="semibold">
            littlebwi
          </Text>
        </Box>

        <HStack spacing={1} mt={[2, 0]}>
          <NavLink href="/">Beranda</NavLink>
          <NavLink href="/new" leftIcon={<AddIcon />}>
            Tambah
          </NavLink>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Header
