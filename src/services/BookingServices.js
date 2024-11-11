import Client from "./api"

export const postBookings = async (bookingData) => {
  try {
    const res = await Client.post("/booking", bookingData)
    return res.data
  } catch (error) {
    throw error
  }
}
