import { useEffect, useState } from "react"
import { GetAllUsers } from "../services/Auth"
import RoleChanger from "../components/RoleChanger"
import "./CSS/UserList.css"

const UserLists = ({ user }) => {
  const [allUsers, setAllUsers] = useState()
  useEffect(() => {
    const getUsers = async () => {
      const response = await GetAllUsers(user.id)
      setAllUsers(response.users)
    }
    getUsers()
  }, [user])
  return (
    <>
      <table className="user-table">
        <thead>
          <tr className="table-header">
            <th className="header-cell">#</th>
            <th className="header-cell">Name</th>
            <th className="header-cell">Email</th>
            <th className="header-cell">Role</th>
          </tr>
        </thead>
        {allUsers?.map((users, i) => (
          <tr key={users._id} className="table-row">
            <td className="table-cell">{i + 1}</td>
            <td className="table-cell">{users.name}</td>
            <td className="table-cell">{users.email}</td>
            <td className="table-cell">
              <RoleChanger user={users} />
            </td>
          </tr>
        ))}
      </table>
    </>
  )
}
export default UserLists
