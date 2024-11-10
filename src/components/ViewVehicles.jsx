import { Link } from "react-router-dom"
import VehicleCard from "./VehicleCard"
import { useEffect, useState } from "react"
import axios from "axios"

const ViewVehicles = () => {
  const [vehicles, setVehicles] = useState()
  useEffect(() => {
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
    getVehicles()
  }, [])
  return (
    <div className="viewVehicles">
      <h2>View All Vehicles</h2>
      <section className="container-grid">
        {vehicles?.map((vehicle) => (
          <Link to={`/vehicles/${vehicle._id}`} key={vehicle._id}>
            <VehicleCard
              brand={vehicle.brand}
              model={vehicle.model}
              price={vehicle.price}
              color={vehicle.color}
              category={vehicle.category}
              image={vehicle.image}
            />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default ViewVehicles
