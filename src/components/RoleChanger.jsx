import { useState } from "react"
import { UpdateUser } from "../services/Auth"
import "./CSS/RoleChanger.css"

const RoleChanger = ({ user }) => {
  const [selected, setSelected] = useState(user.role)
  const handleChange = (e) => {
    console.log(e.target.value)
    setSelected({ [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await UpdateUser(user._id, selected)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="role-form">
        <select
          onChange={handleChange}
          name="role"
          value={selected}
          className="role-select"
        >
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
        <button className="confirm-button">Confirm</button>
      </form>
    </>
  )
}
export default RoleChanger
