import { useParams } from 'react-router-dom'

const VehicleDetail = () => {
  const { vehicleId } = useParams()

  return (
    <div>
      <h2>Vehicle Detail for ID: {vehicleId}</h2>
      
    </div>
  )
}

export default VehicleDetail
