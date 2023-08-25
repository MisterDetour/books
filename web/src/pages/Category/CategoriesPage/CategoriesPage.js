import { useAuth } from 'src/auth'
import CategoriesCell from 'src/components/Category/CategoriesCell'

const CategoriesPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <CategoriesCell userId={currentUser.id} />
    </>
  )
}

export default CategoriesPage
