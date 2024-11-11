import { Link } from "react-router-dom";
import VehicleCard from "./VehicleCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from './Search'

const ViewVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getVehicles = async () => {
      try {
        const res = await axios.get("http://localhost:3001/vehicle");
        setVehicles(res.data);
      } catch (err) {
        console.error("Error fetching vehicles:", err);
      }
    };
    getVehicles();
  }, []);

  return (
    <div className="viewVehicles">
      <h2>View All Vehicles</h2>
    <div className='searchbar'>
    <Search />
    </div>
      <section className="container-grid">
        {vehicles.map((vehicle) => (
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
  );
};

export default ViewVehicles;