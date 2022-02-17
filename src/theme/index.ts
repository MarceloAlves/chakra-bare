import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  semanticTokens: {
    colors: {
      navbar: {
        _dark: 'gray.700',
        default: 'gray.400',
      },
    },
  },
})
