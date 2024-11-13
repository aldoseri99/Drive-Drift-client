import { useState } from "react"
import { putBookings } from "../services/BookingServices"

const StatusChanger = ({ booking }) => {
  const [selected, setSelected] = useState(booking.status)
  const handleChange = (e) => {
    console.log(e.target.value)
    setSelected({ [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await putBookings(booking._id, selected)
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
          value={selected.status} // Set the selected value to booking.status
          className="status-select"
        >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Rejected">Rejected</option>
          <option value="Completed">Completed</option>
        </select>
        <button className="update-button">Update Status</button>
      </form>
    </>
  )
}
export default StatusChanger
