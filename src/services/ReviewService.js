import Client from "./api"

export const postReview = async (Data) => {
  try {
    const res = await Client.post("/review", Data)
    return res.data
  } catch (error) {
    throw error
  }
}
export const getReviews = async (Data) => {
  try {
    const res = await Client.get("/review")
    console.log(res.data)

    return res.data
  } catch (error) {
    throw error
  }
}
