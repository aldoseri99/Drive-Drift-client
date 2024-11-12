import Client from "./api"

export const setCategory = async (CategoryData) => {
  try {
    console.log(CategoryData)
    const res = await Client.post("/category", CategoryData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const postCategory = async () => {
  try {
    const res = await Client.get("/category")
    return res.data
  } catch (error) {
    throw error
  }
}
export const detailCategory = async (category_id) => {
  try {
    const res = await Client.get(`/category/${category_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
