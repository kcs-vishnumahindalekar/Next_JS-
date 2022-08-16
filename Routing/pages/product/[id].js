import {useRouter} from 'next/router'

const Productname = () => {
    const router = useRouter()
    const product_name = router.query.id
    return (
      <div>Product name {product_name} </div>
    )
  }
  
  export default Productname