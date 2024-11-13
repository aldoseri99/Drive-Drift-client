import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { detailVehicle } from '../services/vehicleService'
import AddReview from './AddReview'
import ReviewsCard from './ReviewsCard'
import axios from 'axios'
import './CSS/VehicleDetail.css'

const VehicleDetail = ({ user }) => {
  let navigate = useNavigate()
  const [vehicle, setVehicle] = useState()
  const { vehicle_id } = useParams()

  useEffect(() => {
    const getDetails = async () => {
      const response = await detailVehicle(vehicle_id)
      setVehicle(response)
    }
    getDetails()
  }, [vehicle_id])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/vehicle/${vehicle_id}`)
      alert('Post deleted successfully')
      navigate(`/ViewCategories`)
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Error deleting post')
    }
  }

  return (
    <>
      {vehicle ? (
        <div className="vehicle-detail-container">
          <h2 className="vehicle-title">
            Vehicle Detail For: {vehicle.brand} {vehicle.model}
          </h2>
          <div className="vehicle-image-container">
            <img
              src={vehicle.image.url}
              alt={vehicle.model}
              className="vehicle-image"
            />
          </div>
          <div className="vehicle-detail">
            <p>
              <strong>Name:</strong> {vehicle.brand}
            </p>
            <p>
              <strong>Model:</strong> {vehicle.model}
            </p>
            <p>
              <strong>Price Per Day:</strong> {vehicle.price} BD
            </p>
            <p>
              <strong>Color:</strong> {vehicle.color}
            </p>
            <p>
              <strong>Category:</strong> {vehicle.category.name}
            </p>
            <p>
              <strong>Description:</strong> {vehicle.description}
            </p>
          </div>
          {user && (
            <div className="vehicle-actions">
              <Link
                className="btn btn-primary"
                to={`/VehicleUpdate/${vehicle._id}`}
              >
                Update
              </Link>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete Vehicle
              </button>
              <Link className="btn btn-primary" to={`/booking/${vehicle._id}`}>
                Book
              </Link>
              <AddReview user={user} vehicle={vehicle} />
            </div>
          )}
          <ReviewsCard vehicle={vehicle} />
        </div>
      ) : null}
    </>
  )
}

export default VehicleDetail
