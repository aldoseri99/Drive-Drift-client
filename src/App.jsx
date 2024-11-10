import "./App.css"
import { Route, Routes } from "react-router-dom"
// import axios from 'axios'
import { useState, useEffect } from "react"
import AddVehicle from "./pages/AddVehicle"
import axios from "axios"
import Home from "./components/Home"
// import Nav from '/components/Nav'
// import Footer from './components/Footer'
// import Profile from './components/Profile'
// import Reviews from './components/Reviews'
// import ViewVehicles from './components/ViewVehicles'
// import VehicleDetail from './components/VehicleDetail'
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
// import { checkSession } from './services/Auth
// import UserProfile from './components/UserProfile

const App = () => {
  const [user, setUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState([])
  const [bookings, setBookings] = useState([])
  const [reviews, setReviews] = useState([])
  const [vehicles, setVehicles] = useState([])

  const handleLogout = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  // const getBookings = async () => {
  //   try {
  //     let res = await axios.get("http://localhost:3001/booking")
  //     console.log("Fetched bookings:", res.data)
  //     console.log(res.data)
  //     setBookings(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const getReviews = async () => {
  //   try {
  //     let res = await axios.get("http://localhost:3001/review")
  //     console.log("Fetched reviews:", res.data)
  //     console.log(res.data)
  //     setReviews(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const getVehicles = async () => {
  //   try {
  //     let res = await axios.get("http://localhost:3001/vehicle")
  //     console.log("Fetched Vehicles:", res.data)
  //     console.log(res.data)
  //     setVehicles(res.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const checkToken = async () => {
  //   //If a token exists, send token to localStorage to persist logged in user
  //   const user = await CheckSession()
  //   console.log(user)
  //   setUser(user.data)
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem("token")

  // if (token) {
  //   checkToken()
  // // }
  // getBookings()
  // getReviews()
  // getVehicles()
  // })

  return (
    <>
      <div>hello my friends </div>
      <a href="/addvehicle">AddVehicle</a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addvehicle" element={<AddVehicle />} />
      </Routes>
    </>
  )
}

export default App
