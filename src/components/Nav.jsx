const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="btn btn-dark" href="/">
        Home
      </a>
      <a className="btn btn-dark" href="/addvehicle">
        Add Vehicle
      </a>
      <a className="btn btn-dark" href="/viewVehicles">
        View All Vehicles
      </a>
      <a className="btn btn-dark" href="/register">
        Register
      </a>
      <a className="btn btn-dark" href="/signIn">
        SignIn
      </a>
    </nav>
  )
}

export default Nav
