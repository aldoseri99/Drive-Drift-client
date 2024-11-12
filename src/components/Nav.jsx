import { Link } from "react-router-dom"

const Nav = ({ handleLogOut }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="btn btn-dark" href="/">
        Home
      </a>
      <a className="btn btn-dark" href="/addvehicle">
        Add Vehicle
      </a>
      <a className="btn btn-dark" href="/addinsurance">Add Insurance</a>

      <a className="btn btn-dark" href="/addcategory">
        Add Category
      </a>

      <a className="btn btn-dark" href="/viewcategories">
        View All Categories
      </a>

      <a className="btn btn-dark" href="/viewvehicles">
        View All Vehicles
      </a>
      <a href="/viewinsurance" className="btn btn-dark">insurance types</a>
      <a className="btn btn-dark" href="/addinsurance">
        Add Insurance
      </a>
      <a className="btn btn-dark" href="/register">
        Register
      </a>
      <a className="btn btn-dark" href="/signIn">
        SignIn
      </a>
      <Link
        className="btn btn-dark"
        to="/"
        onClick={() => {
          handleLogOut()
        }}
      >
        Logout
      </Link>
    </nav>
  )
}

export default Nav
