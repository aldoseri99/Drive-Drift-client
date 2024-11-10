import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const ViewVehicles = ({ vehicles }) => {





  
  return (
    <div className="viewVehicles">
      <h2>View All Vehicles</h2>
      <section className="container-grid">
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            onClick={() => handleVehicleClick(vehicle.id)}
            brand={vehicle.brand}
            model={vehicle.model}
            price={vehicle.price}
            color={vehicle.color}
            category={vehicle.category}
            image={vehicle.image}
          />
        ))}
      </section>
    </div>
  )
}

export default ViewVehicles
