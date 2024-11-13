import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { detailVehicle, setVehicle } from "../services/vehicleService"
import { Link } from "react-router-dom"
import AddReview from "./AddReview"
import ReviewsCard from "./ReviewsCard"

const VehicleDetail = ({ user }) => {
  const [vehicle, setVehicle] = useState()
  const { vehicle_id } = useParams()
  useEffect(() => {
    const getDetails = async () => {
      const response = await detailVehicle(vehicle_id)
      setVehicle(response)
    }
    getDetails()
  }, [])

  return (
    <>
      {vehicle ? (
        <div>
          <h2>Vehicle Detail for ID: {vehicle._id}</h2>
          <img src={vehicle.image.url} alt="" />
          <p>Name: {vehicle.brand}</p>
          <p>Model :{vehicle.model}</p>
          <p>Price Per Day: {vehicle.price} BD</p>
          <p>Color: {vehicle.color}</p>
          <p>Category: {vehicle.category}</p>
          <p>Description:
            {vehicle.description}</p>
          <Link className="btn btn-primary" to={`/booking/${vehicle._id}`}>
            Book
          </Link>
          <AddReview user={user} vehicle={vehicle} />
          <ReviewsCard vehicle={vehicle} />
        </div>
      ) : null}
    </>
  )
}

export default VehicleDetail
