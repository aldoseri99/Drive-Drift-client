import './App.css'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ViewVehicles from './components/ViewVehicles'
import ViewInsurances from './components/ViewInsurances'
import Home from './components/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Reviews from './components/Reviews'
import VehicleDetail from './components/VehicleDetail'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import { CheckSession } from './services/Auth'
import UserProfile from './components/UserProfile'
import SideBar from './components/SideBar'
import AddVehicle from './pages/AddVehicle'
import AddInsurance from './pages/AddInsurance'
import VehicleCategory from './components/VehicleCategory'
import AddCategory from './pages/AddCategory'
import AddBooking from "./pages/AddBooking"


const App = () => {
  const [user, setUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [bookings, setBookings] = useState([])
  const [reviews, setReviews] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [categories, setCategories] = useState([])

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  const getBookings = async () => {
    try {
      let res = await axios.get('http://localhost:3001/booking')
      console.log('Fetched bookings:', res.data)
      console.log(res.data)
      setBookings(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getReviews = async () => {
    try {
      let res = await axios.get('http://localhost:3001/review')
      console.log('Fetched reviews:', res.data)
      console.log(res.data)
      setReviews(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getVehicles = async () => {
    try {
      let res = await axios.get('http://localhost:3001/vehicle')
      console.log('Fetched Vehicles:', res.data)
      console.log(res.data)
      setVehicles(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const getCategories = async () => {
    try {
      let res = await axios.get('http://localhost:3001/category')
      console.log('Fetched Category:', res.data)
      console.log(res.data)
      setCategories(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)

    if (token) {
      checkToken()
    }
  }, [])

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
      <main className={isSidebarOpen ? 'shifted' : ''}>
        <Routes>
          <Route path="/user" element={<SideBar user={user} />} />
          <Route path="/addvehicle" element={<AddVehicle />} />
          <Route path="/addinsurance" element={<AddInsurance />} />
          <Route path="/addcategory" element={<AddCategory />} />

          <Route
            path="/viewcategories"
            element={
              <VehicleCategory
                getCategories={getCategories}
                getVehicles={getVehicles}
                getBookings={getBookings}
                bookings={bookings}
                setBookings={setBookings}
                user={user}
              />
            }
          />
          <Route path="/addinsurance" element={<AddInsurance />} />
          <Route path="/viewvehicles/:categoryId" element={<ViewVehicles />} />
          <Route path="/viewinsurance" element={<ViewInsurances />} />
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
            path="/vehicles/:vehicle_id"
            element={<VehicleDetail user={user} />}
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
          <Route
            path="/booking/:vehicle_id"
            element={<AddBooking user={user} />}
          ></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
