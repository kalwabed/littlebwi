import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace`, body: 'Inter, Ubuntu, Roboto, sans-serif' }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const config: ThemeConfig = {
  initialColorMode: 'light'
}

const theme = extendTheme({
  colors: {
    black: '#16161D'
  },
  fonts,
  config,
  breakpoints
})

export default theme
