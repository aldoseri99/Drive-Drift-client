import { Link } from 'react-router-dom'
import CategoryCard from './CategoryCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './Search'

const VehicleCategory = () => {
  const [categories, setCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get('http://localhost:3001/category')
        setCategories(res.data)
      } catch (err) {
        console.log('Error fetching categories:', err)
      }
    }
    getCategories()
  }, [])

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="vehiclecategory">
      <h2>View Vehicle Category</h2>
      <div className="searchbar">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <section className="container-grid">
        {filteredCategories.map((category) => (
          <Link to={`/viewVehicles/${vehicle._id}`} key={vehicles._id}>
            <ViewVehicles />
          </Link>
        ))}
      </section>
    </div>
  )
}

export default VehicleCategory
