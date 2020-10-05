import * as React from 'react'
import { Box, Heading, Image } from '@chakra-ui/core'

interface PageHeaderProps {
  title: string
  isHomePage?: boolean
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, isHomePage = false }) => {
  if (isHomePage) {
    return <div>hello</div>
  }

  return (
    <Box position="relative" backgroundColor="gray08" as="header" pt={[100, null, null, null]} pb={[0, null, null, 3]}>
      <Image position="absolute" top="0" left="0" width="100%" height="100%" objectFit="cover" src="/topography-img.png" />
      <Box padding={['24px', null, null, 0]} position="relative" zIndex={2} mx="auto" maxWidth="3xl">
        <Heading as="h1" size="2xl" color="white">
          {title}
        </Heading>
      </Box>
    </Box>
  )
}

export default PageHeader
