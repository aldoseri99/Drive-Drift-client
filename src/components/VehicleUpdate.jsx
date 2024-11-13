import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./CSS/VehicleUpdate.css" // Reusing the CSS file from VehicleDetail
import { postCategory } from "../services/categoryService"

const VehicleUpdate = () => {
  let navigate = useNavigate()
  const { vehicle_id } = useParams()

  // Initialize state for the form fields
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [color, setColor] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [catList, setCatList] = useState("")

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/vehicle/${vehicle_id}`
        )
        const res = await postCategory()
        setBrand(response.data.brand)
        setModel(response.data.model)
        setColor(response.data.color)
        setCategory(response.data.category._id)
        setPrice(response.data.price)
        setDescription(response.data.description)
        setCatList(res)
      } catch (error) {
        console.error("Error fetching post data:", error)
      }
    }
    fetchPost()
  }, [vehicle_id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updatedPost = { brand, model, description, color, category, price }

    try {
      const response = await axios.put(
        `http://localhost:3001/vehicle/${vehicle_id}`,
        updatedPost
      )
      console.log("Post updated:", response.data)
      navigate(`/vehicles/${vehicle_id}`)
    } catch (error) {
      console.error("Error updating post:", error)
    }
  }

  return (
    <div className="vehicle-detail-container">
      <h2 className="vehicle-title">Update Vehicle Details</h2>
      <form onSubmit={handleSubmit} className="vehicle-form">
        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Color</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            name=""
            id=""
            value={category}
            className="update-select"
          >
            {catList
              ? catList.map((list) => (
                  <option value={list._id}>{list.name}</option>
                ))
              : null}
          </select>
        </div>
        <div className="form-group">
          <label>Price Per Day (BD)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Vehicle
        </button>
      </form>
    </div>
  )
}

export default VehicleUpdate
