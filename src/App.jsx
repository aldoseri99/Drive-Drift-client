import "./App.css"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import ViewVehicles from "./components/ViewVehicles"
import Home from "./components/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Reviews from "./components/Reviews"
import VehicleDetail from "./components/VehicleDetail"
import SignIn from "./pages/SignIn"
import Register from "./pages/Register"
import { CheckSession } from "./services/Auth"
import UserProfile from "./components/UserProfile"
import SideBar from "./components/SideBar"
import AddVehicle from "./pages/AddVehicle"

const App = () => {
  const [user, setUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState([])
  const [bookings, setBookings] = useState([])
  const [reviews, setReviews] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleLogout = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const getBookings = async () => {
    try {
      let res = await axios.get("http://localhost:3001/booking")
      console.log("Fetched bookings:", res.data)
      console.log(res.data)
      setBookings(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getReviews = async () => {
    try {
      let res = await axios.get("http://localhost:3001/review")
      console.log("Fetched reviews:", res.data)
      console.log(res.data)
      setReviews(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getVehicles = async () => {
    try {
      let res = await axios.get("http://localhost:3001/vehicle")
      console.log("Fetched Vehicles:", res.data)
      console.log(res.data)
      setVehicles(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const checkToken = async () => {
    //If a token exists, send token to localStorage to persist logged in user
    const user = await CheckSession()
    console.log(user)
    setUser(user.data)
  }

  return (
    <div className="App">
      <Nav
        user={user}
        handleLogout={handleLogout}
        toggleSidebar={toggleSidebar}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <SideBar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        booking={bookings}
      />
      <main className={isSidebarOpen ? "shifted" : ""}>
        <Routes>
          <Route path="/user" element={<SideBar user={user} />} />
          <Route path="/addvehicle" element={<AddVehicle />} />
          <Route path="/viewVehicles" element={<ViewVehicles />} />
          <Route
            path="/"
            element={
              <Home
                getBookings={getBookings}
                bookings={bookings}
                setBookings={setBookings}
                getReviews={getReviews}
                reviews={reviews}
                setReviews={setReviews}
                searchTerm={searchTerm}
                user={user}
              />
            }
          />
          <Route
            path="/vehicles"
            element={
              <ViewVehicles
                getVehicles={getVehicles}
                getBookings={getBookings}
                bookings={bookings}
                setBookings={setBookings}
                user={user}
              />
            }
          />
          <Route
            path="/user/me"
            element={
              <UserProfile
                getBookings={getBookings}
                bookings={bookings}
                user={user}
              />
            }
          />
          <Route
            path="/signIn"
            element={<SignIn user={user} setUser={setUser} />}
          />
          <Route
            path="/register"
            element={<Register user={user} setUser={setUser} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
