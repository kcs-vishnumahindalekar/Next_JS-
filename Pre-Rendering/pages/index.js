import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      {/* Static gen with get static props */}
      <Link href='/users'>
        <a>Users</a>
      </Link>
      <br/>
      {/* Static Site Generation with dynamic parameter */}
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
      <br/>
      {/* Incremental static reganeration */}
      <Link href='/products'>
        <a>Product</a>
      </Link>
      <br/>
      {/* Static Site Generation with server side  */}
      <Link href='/news'>
        <a>News</a>
      </Link>
      <br/>
      {/* client side data fetching with Static Site Generation */}
      <Link href='/dashboard'>
        <a>dashboard</a>
      </Link>
      <br/>
      {/* client side data fetching with Static Site Generation with SWR */}
      <Link href='/dashboard-swr'>
        <a>dashboard-swr</a>
      </Link>
      <br/>
      {/*  pre rendering with client side data fetching */}
      <Link href='/events'>
        <a>events</a>
      </Link>
    </>
  )
}

export default Home
