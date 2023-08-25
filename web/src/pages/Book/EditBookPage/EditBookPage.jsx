import { useAuth } from 'src/auth'
import EditBookCell from 'src/components/Book/EditBookCell'

const EditBookPage = ({ id }) => {
  const { currentUser } = useAuth()

  return <EditBookCell id={id} userId={currentUser.id} />
}

export default EditBookPage
