import { Calendar, dayjsLocalizer } from "react-big-calendar"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { getBookings } from "../services/BookingServices"
import "./CSS/calendar.css"

const MyCalendar = () => {
  const localizer = dayjsLocalizer(dayjs)
  const [bookings, setBookings] = useState()
  useEffect(() => {
    const getInfo = async () => {
      const res = await getBookings()
      const mappedBookings = res.map((booking) => ({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
        title: `${booking.vehicle.brand}, ${booking.vehicle.model}`,
      }))
      setBookings(mappedBookings)
    }
    getInfo()
  }, [])

  return (
    <div>
      {bookings ? (
        <Calendar
          localizer={localizer}
          events={bookings}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 500,
          }}
        />
      ) : null}
    </div>
  )
}

export default MyCalendar
