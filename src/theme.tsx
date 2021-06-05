import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const fonts = { mono: `'Menlo', monospace`, body: 'Inter, Ubuntu, Roboto, sans-serif' }

const config: ThemeConfig = {
  initialColorMode: 'light'
}

const theme = extendTheme({
  fonts,
  config
})

export default theme
