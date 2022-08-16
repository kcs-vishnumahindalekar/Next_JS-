import {useRouter} from 'next/router'

const Sid = () => {
    const router = useRouter()
    const student_name = router.query.sid
  return (
    <div> Student id {student_name}</div>
  )
}

export default Sid