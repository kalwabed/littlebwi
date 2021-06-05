import { Link as ChakraLink, LinkOverlay, LinkProps } from '@chakra-ui/react'
import Link from 'next/link'

interface NextLinkProps extends LinkProps {}

const NextLink = (props: NextLinkProps) => {
  return (
    <Link href={props.href} passHref>
      <ChakraLink {...props}>{props.children}</ChakraLink>
    </Link>
  )
}

export default NextLink
