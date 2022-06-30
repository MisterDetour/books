import { useAuth } from '@redwoodjs/auth'
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
