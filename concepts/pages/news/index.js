import Link from "next/link"

function News({ data }) {
    return <><h1 className='content'>{data}</h1>
            <Link href='/api/preview?redirect=/news'>On preview Mode</Link><br/>
            <Link href='/api/off-preview?redirect=/news'>Off preview Mode</Link></>
}
  
  export default News
  
  export async function getStaticProps(context) {
    console.log('Running getStaticProps', context.previewData)
    return {
      props: {
        data: context.preview
          ? 'preview Mode On'
          : 'preview Mode Off'
      }
    }
  }
  