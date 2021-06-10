import '@fontsource/inter/variable-full.css'

import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import theme from '@/theme'
import Layout from '@/components/layout'
import AppContext from '@/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AppContext.Provider>
          <Component {...pageProps} />
        </AppContext.Provider>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
