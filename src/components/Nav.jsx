import "./Nav.css"

const Nav = () => {
  return (
    <nav className="nav">
      <a className="btnNav" href="/">
        Home
      </a>
      <a className="btnNav" href="/addvehicle">
        Add Vehicle
      </a>

      <a className="btn btn-dark" href="/viewvehicles">
        View All Vehicles
      </a>
      <a className="btnNav" href="/register">
        Register
      </a>
      <a className="btnNav" href="/signIn">
        SignIn
      </a>
    </nav>
  )
}

export default Nav
