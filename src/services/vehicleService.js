import Client from "./api"

export const setVehicle = async (vehicleData) => {
  try {
    console.log(vehicleData)
    const res = await Client.post("/vehicle", vehicleData)
    return res.data
  } catch (error) {
    throw error
  }
}
// export const postVehicle = async () => {
//   try {
//     const res = await Client.get("/vehicle")
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }
