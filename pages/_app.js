import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import '@fontsource/m-plus-rounded-1c/300.css'
import '@fontsource/m-plus-rounded-1c/400.css'
import '@fontsource/m-plus-rounded-1c/500.css'
import'@fontsource/m-plus-1p/300.css'
import'@fontsource/m-plus-1p/400.css'
import'@fontsource/m-plus-1p/500.css'
import '../styles/fonts.css'

function MyApp({ Component, pageProps, router }) {
  
  return(
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
      </Layout>
    </ChakraProvider>

  )
}

export default MyApp
