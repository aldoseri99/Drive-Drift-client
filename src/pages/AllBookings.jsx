import { useEffect, useState } from "react"
import { getBookings } from "../services/BookingServices"
import "./CSS/Booking.css"

const AllBookings = ({ user }) => {
  const [selected, setSelected] = useState()
  const [bookings, setBookings] = useState()
  useEffect(() => {
    const getList = async () => {
      const response = await getBookings()
      setBookings(response)
    }
    getList()
  }, [user])
  const stat = ["Pending", "Confirmed", "Rejected", "Completed"]
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
    } catch (error) {}
  }
  return (
    <>
      <table className="booking-history-table">
        <thead>
          <tr className="table-header">
            <th className="header-cell">#</th>
            <th className="header-cell"></th>
            <th className="header-cell">Vehicle</th>
            <th className="header-cell">Start Date</th>
            <th className="header-cell">End Date</th>
            <th className="header-cell">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((book, index) => (
            <tr className="table-row" key={index}>
              <td className="table-cell">{index + 1}</td>
              <td className="table-cell">
                <img
                  className="table-image"
                  src={book.vehicle.image.url}
                  alt=""
                />
              </td>
              <td className="table-cell">
                {book.vehicle.brand}, {book.vehicle.model}
              </td>
              <td className="table-cell">
                {new Date(book.startDate).toLocaleDateString()}
              </td>
              <td className="table-cell">
                {new Date(book.endDate).toLocaleDateString()}
              </td>
              <td className="table-cell">
                <form onSubmit={() => handleSubmit(book._id)}>
                  <select>
                    {stat.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default AllBookings
