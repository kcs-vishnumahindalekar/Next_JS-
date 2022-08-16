import {useRouter} from 'next/router'

const Doc = () => {
    const router = useRouter()
    const {params = []} = router.query
    console.log(params)
    
    if(params.length === 2)
    return <h1>{params[0]}{params[1]}</h1>
    if(params.length === 3)
    return <h1>{params[0]}=={params[1]}=={params[2]}</h1>
    
return (
    <div> Doc home page </div>
  )
}

export default Doc