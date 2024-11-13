import { Link, useParams } from "react-router-dom"
import VehicleCard from "./VehicleCard"
import { useEffect, useState } from "react"
import axios from "axios"
import Search from "./Search"

const ViewVehicles = ({}) => {
  const { categoryId } = useParams()
  const [vehicles, setVehicles] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState(null)

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/category/${categoryId}`
        )
        setCategory(res.data)
      } catch (err) {
        console.log("Error fetching categories:", err)
      }
    }
    getCategories()
    const getVehicles = async () => {
      try {
        const res = await axios.get("http://localhost:3001/vehicle")
        const filteredVehicles = res.data.filter(
          (vehicle) => vehicle.category === categoryId
        )
        setVehicles(filteredVehicles)
        console.log(filteredVehicles)
      } catch (err) {
        console.error("Error fetching vehicles:", err)
      }
    }
    getVehicles()
  }, [])

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="viewVehicles">
      {category ? (
        <h2 style={{ color: "white" }}>View {category.name}</h2>
      ) : null}

      <div className="searchbar">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <section className="container-grid">
        {filteredVehicles.map((vehicle) => (
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

// test
