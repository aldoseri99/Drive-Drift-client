import { Link } from "react-router-dom"
import "./CSS/Nav.css"

const Nav = ({ handleLogout, user }) => {
  return (
    <nav className="nav">
      <a className="btnNav" href="/">
        Home
      </a>
      <a className="btnNav" href="/viewcategories">
        View All Categories
      </a>
      {user ? (
        <>
          {user.role === "admin" ? (
            <>
              <a href="/viewinsurance" className="btnNav">
                insurance types
              </a>
              <a href="/allbookings" className="btnNav">
                All Bookings
              </a>
            </>
          ) : null}
          <Link
            className="btnNav"
            to="/"
            onClick={() => {
              handleLogout()
            }}
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <a className="btnNav" href="/register">
            Register
          </a>
          <a className="btnNav" href="/signIn">
            SignIn
          </a>
        </>
      )}
    </nav>
  )
}

export default Nav
