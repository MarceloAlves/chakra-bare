import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, Text, useBreakpoint, useColorMode, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const currentBreakPoint = useBreakpoint()

  return (
    <VStack alignItems={'flex-start'}>
      <Flex
        height={'min-content'}
        background={'navbar'}
        width={'full'}
        p={2}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <IconButton
          aria-label="toggle color mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
        <Text>Breakpoint: {currentBreakPoint}</Text>
      </Flex>
      <Box minH={'full'} minW={'full'} p={2}>
        {children}
      </Box>
    </VStack>
  )
}
