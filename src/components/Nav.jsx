import { Link } from "react-router-dom"
import "./CSS/Nav.css"

const Nav = ({ handleLogout }) => {
  return (
    <nav className="nav">
      <a className="btnNav" href="/">
        Home
      </a>
      <a className="btnNav" href="/addvehicle">
        Add Vehicle
      </a>
      <a className="btnNav" href="/addinsurance">
        Add Insurance
      </a>

      <a className="btnNav" href="/addcategory">
        Add Category
      </a>

      <a className="btnNav" href="/viewcategories">
        View All Categories
      </a>

      <a className="btnNav" href="/viewvehicles">
        View All Vehicles
      </a>
      <a href="/viewinsurance" className="btnNav">
        insurance types
      </a>
      <a className="btnNav" href="/addinsurance">
        Add Insurance
      </a>
      <a className="btnNav" href="/register">
        Register
      </a>
      <a className="btnNav" href="/signIn">
        SignIn
      </a>
      <Link
        className="btnNav"
        to="/"
        onClick={() => {
          handleLogout()
        }}
      >
        Logout
      </Link>
    </nav>
  )
}

export default Nav
