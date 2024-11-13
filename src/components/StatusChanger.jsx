import { useState } from "react"
import { putBookings } from "../services/BookingServices"

const StatusChanger = ({ booking }) => {
  const [selected, setSelected] = useState(booking.status)
  const [confirmed, setConfirmed] = useState(false)
  const [selectedFrom, setSelectedFrom] = useState({
    ["status"]: booking.status,
  })
  const handleChange = (e) => {
    setSelected(e.target.value)
    setSelectedFrom({ [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await putBookings(booking._id, selectedFrom)
      if (res) {
        setConfirmed(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="status-form">
        <select
          onChange={handleChange}
          name="status"
          value={selected}
          className="role-select"
        >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Rejected">Rejected</option>
          <option value="Completed">Completed</option>
        </select>
        <button style={{ marginLeft: "10px" }} className="confirm-button">
          Update
        </button>
        {confirmed ? <p className="confirm-change">updated</p> : null}
      </form>
    </>
  )
}
export default StatusChanger
