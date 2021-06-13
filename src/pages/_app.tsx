import '@fontsource/inter/variable-full.css'

import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import theme from '@/theme'
import Layout from '@/components/layout'
import AppContext from '@/AppContext'
import defaultSeo from '@/defaultSeo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...defaultSeo} />
      <Layout>
        <AppContext.Provider>
          <Component {...pageProps} />
        </AppContext.Provider>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
