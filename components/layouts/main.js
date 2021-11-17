import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Hero from '../hero-section'
import Layout from './article'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Valen's Homepage" />
        <meta name="author" content="Valen's Homepage" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/img/logo-tab.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@valen_cassa" />
        <meta name="twitter:creator" content="@valen_cassa" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Valentin Cassarino's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Valentin Cassarino - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Layout>
        <Hero />
        </Layout>
        {children}
      </Container>

    </Box>
  )
}

export default Main
