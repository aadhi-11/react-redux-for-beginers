import { useSelector } from "react-redux"

const UserView = () => {
  const users = useSelector((state) => state.user.users)
  return (
    <div>
      {
        users && (
          <>
          <h2>List of Users</h2>
          <ul>
          {users.map((user)=>{
            return(
              {user}
            )
          })}
          </ul>
          </>
        )
      }

    </div>
  )
}

export default UserView