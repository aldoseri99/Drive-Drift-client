import Client from "./api"

export const SignInUser = async (data) => {
  try {
    const res = await Client.post("/auth/signIn", data)
    // Set the current signed in users token to localStorage
    console.log(data)
    console.log(res)

    localStorage.setItem("token", res.data.token)
    console.log(res.data.user)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (formData) => {
  try {
    const res = await Client.post("/auth/register", formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get("/auth/session")
    console.log("CHECK SESSION: ", res)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserInfo = async (userId) => {
  try {
    const res = await Client.get(`/auth/user/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetAllUsers = async (userId) => {
  try {
    const res = await Client.get(`/auth/users/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateUser = async (user_id, data) => {
  try {
    const res = await Client.put(`/auth/update/${user_id}`, data)

    return res.data
  } catch (error) {
    throw error
  }
}
