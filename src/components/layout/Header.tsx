import { Flex, LinkProps, LinkBox, LinkOverlay, Text, HStack } from '@chakra-ui/react'
import Link from 'next/link'

import Container from '../Container'

interface NavLinkProps extends LinkProps {}

const NavLink = (props: NavLinkProps) => (
  <LinkBox p={4} _hover={{ bg: 'gray.100' }} _focusWithin={{ ring: 2 }} rounded="md">
    <Link href={props.href} passHref>
      <LinkOverlay>{props.children}</LinkOverlay>
    </Link>
  </LinkBox>
)

const Header = () => {
  return (
    <Container mt={10}>
      <Flex
        direction={['column', 'row']}
        justify="space-between"
        alignItems="center"
        px={[4, 2]}
        // bg="blue.500"
        py={[1.5, 0]}
      >
        <Text fontSize={['2xl', 'xl']} fontWeight="semibold">
          muterbanyuwangi.id
        </Text>

        <HStack spacing={1} as="nav" mr={[0, 6]}>
          <NavLink href="/">Beranda</NavLink>
          <NavLink href="/new">Daftar</NavLink>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Header
