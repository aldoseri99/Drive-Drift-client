import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { detailVehicle, setVehicle } from "../services/vehicleService"
import { Link } from "react-router-dom"

const VehicleDetail = () => {
  const [vehicle, setVehicle] = useState()
  const { vehicle_id } = useParams()
  console.log(vehicle_id)

  useEffect(() => {
    const getDetails = async () => {
      const response = await detailVehicle(vehicle_id)
      setVehicle(response)
      console.log(response)
    }
    getDetails()
  }, [])
  return (
    <>
      {vehicle ? (
        <div>
          <h2>Vehicle Detail for ID: {vehicle._id}</h2>
          <img src={vehicle.image.url} alt="" />
          <p>{vehicle.brand}</p>
          <p>{vehicle.model}</p>
          <p>{vehicle.price}</p>
          <p>{vehicle.color}</p>
          <p>{vehicle.category}</p>
          <p>{vehicle.description}</p>
          <Link className="btn btn-primary" to={`/booking/${vehicle._id}`}>
            Book
          </Link>
        </div>
      ) : null}
    </>
  )
}

export default VehicleDetail
