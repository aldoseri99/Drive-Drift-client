import { Link } from "react-router-dom"
import "./CSS/Nav.css"
import { useEffect, useState } from "react"
import { GetUserInfo } from "../services/Auth"

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
          <a href="/viewinsurance" className="btnNav">
            insurance types
          </a>
          {user.role === "admin" ? (
            <>
              <a href="/allbookings" className="btnNav">
                All Bookings
              </a>
              <a href="/userlist" className="btnNav">
                User List
              </a>
            </>
          ) : (
            <a href="/bookings" className="btnNav">
              My Bookings
            </a>
          )}
          <Link
            className="btnNav"
            to="/"
            onClick={() => {
              handleLogout()
            }}
          >
            Logout
          </Link>
          <p className="welcome">Hello, {user.name}</p>
          <img className="nav-img" src={user.image} alt="" />
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
