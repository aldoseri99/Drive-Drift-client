import Client from './api'

export const getInsurances = async () => {
  try {
    const res = await Client.get('/insurance')
    return res.data
  } catch (error) {
    throw error
  }
}
