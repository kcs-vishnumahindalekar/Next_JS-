import Head from 'next/head'
import Footer from '../component/Layout/Footer'

function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name='description' content='Free tutorials on web development' />
      </Head>
      <h1 className='content'>About</h1>
    </>
  )
}

export default About

// its own custom Layout using function

About.getLayout = page => (
  <>
    {page}
    <Footer />
  </>
)
