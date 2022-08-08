import { CustomerContextProvider } from '../hooks/context/formContext';
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
    <CustomerContextProvider>
     <Component {...pageProps} />
    </CustomerContextProvider>
  </ChakraProvider>
  )
}

export default MyApp
