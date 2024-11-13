import Client from "./api"

export const postBookings = async (bookingData) => {
  try {
    const res = await Client.post("/booking", bookingData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const getBookings = async (bookingData) => {
  try {
    const res = await Client.get("/booking")
    return res.data
  } catch (error) {
    throw error
  }
}

export const putBookings = async (id, bookingData) => {
  try {
    const res = await Client.put(`/booking/${id}`, bookingData)
    return res.data
  } catch (error) {
    throw error
  }
}
