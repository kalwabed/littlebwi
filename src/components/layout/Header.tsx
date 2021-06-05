import { Flex, LinkProps, LinkBox, LinkOverlay, Text, HStack, Box } from '@chakra-ui/react'
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
    <Container my={10}>
      <Flex direction={['column', 'row']} justify="space-between" alignItems="center" px={[4, 0]} py={[1.5, 0]}>
        <Box bg="black" py={1} px={3} color="white">
          <Text fontSize={['2xl', 'xl']} fontWeight="semibold">
            muterbanyuwangi.id
          </Text>
        </Box>

        <HStack spacing={1} as="nav" mr={[0, 6]}>
          <NavLink href="/">Beranda</NavLink>
          <NavLink href="/new">Daftar</NavLink>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Header
