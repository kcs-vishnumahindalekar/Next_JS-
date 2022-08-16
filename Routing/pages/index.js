
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleClick =()=>{
    console.log('click product button')
    router.push('/product')
    // router.replace('/product')
  }
  return (
    <div className={styles.container}>
      <h1>hello </h1>
      <Link href='/blog'>
        <a>Blog</a>
      </Link><br/>
      <Link href='/product'>
        <a>Product</a>
      </Link><br/>
      <button onClick={handleClick}>Place Order</button>
    </div>
  )
}
