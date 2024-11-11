import { Link } from 'react-router-dom'
import VehicleCard from './VehicleCard'

const ViewVehicles = ({ vehicles }) => {
  return (
    <div className="viewVehicles">
      <h2>View All Vehicles</h2>
      <section className="container-grid">
        {vehicles.map((vehicle) => (
          <Link to={`/vehicles/${vehicle.id}`} key={vehicle.id}>
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
// underscore
export default ViewVehicles
