import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { detailVehicle, setVehicle } from '../services/vehicleService'
import { Link } from 'react-router-dom'
import AddReview from './AddReview'
import ReviewsCard from './ReviewsCard'
import axios from 'axios'

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
  }, [])
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/vehicle/${vehicle_id}`);
      alert('Post deleted successfully'); 
      navigate(`/ViewCategories`)
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Error deleting post');
    }
  };

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

          {user ? (
            <div>
              <Link
                className="btn btn-primary"
                to={`/VehicleUpdate/${vehicle._id}`}
              >
                Update
              </Link>
              <button onClick={handleDelete}>Delete Vehicle</button>
              <Link className="btn btn-primary" to={`/booking/${vehicle._id}`}>
                Book
              </Link>
              <AddReview user={user} vehicle={vehicle} />
            </div>
          ) : null}


          <ReviewsCard vehicle={vehicle} />
        </div>
      ) : null}
    </>
  )
}

export default VehicleDetail
