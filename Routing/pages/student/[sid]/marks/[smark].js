import {useRouter} from 'next/router'

const Smark = () => {
    const router = useRouter()
    const student_mark = router.query.smark
    const student_name = router.query.sid
  return (
    <div> Student {student_name} mark {student_mark}</div>
  )
}

export default Smark