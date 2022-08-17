import '../styles/globals.css'
import Header from '../component/Layout/Hedder'
import Footer from '../component/Layout/Footer' 

function MyApp({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }

  return <>
          <Header/>
            <Component {...pageProps} />
          <Footer/>
          </>

}

export default MyApp
