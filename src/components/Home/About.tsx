/* cSpell:disable */
import appConfig from '@/appConfig'
import { Heading, Link, Text, VStack } from '@chakra-ui/react'
import NextLink from '../NextLink'

const About = () => {
  const domain = appConfig.siteUrl.replace('https://', '')

  return (
    <VStack spacing={4} align="start">
      <Heading size="lg" as="h3">
        Tentang
      </Heading>
      <Text>
        <NextLink href={appConfig.siteUrl} color="blue.600">
          {domain}
        </NextLink>{' '}
        bukan media, atau startup, hanya tempat berbagi informasi mengenai hal-hal positif yang bisa kita temukan di
        Banyuwangi. Dibangun dan dikembangkan oleh{' '}
        <Link color="blue.600" href="https://www.instagram.com/kalwabed" isExternal>
          Kalwabed Rizki
        </Link>
        .
      </Text>

      <Text>
        Kamu juga bisa ikut berkontribusi dengan menambahkan usaha/bisnismu, komunitas, atau hal baik apapun itu supaya
        lebih dikenal dan menjangkau lebih banyak orang. Daftar melalui halaman{' '}
        <NextLink href="/new" color="blue.600">
          new
        </NextLink>
        .
      </Text>

      <Text>
        Kritik, saran, dan masukan bisa melalui IG:{' '}
        <Link href="" color="blue.600" isExternal>
          Little BWI
        </Link>
        . Jika menurut kamu ini menarik, silahkan bagikan linknya{' '}
        <NextLink href={appConfig.siteUrl} color="blue.600">
          {domain}
        </NextLink>
        .
      </Text>
    </VStack>
  )
}

export default About
