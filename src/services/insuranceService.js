import Client from "./api"

export const setInsurance = async (insuranceData) => {
  try {
    console.log(insuranceData)
    const res = await Client.post("/insurance", insuranceData)
    return res.data
  } catch (error) {
    throw error
  }
}