import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const VehicleUpdate = () => {
  let navigate = useNavigate()
  const { vehicle_id } = useParams()

  // Initialize state for the form fields
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [color, setColor] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    // Fetch the post data when the component mounts
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/vehicle/${vehicle_id}`
        )
        setBrand(response.data.brand)
        setModel(response.data.model)
        setColor(response.data.color)
        setCategory(response.data.category)
        setPrice(response.data.price)
        setDescription(response.data.description)
      } catch (error) {
        console.error('Error fetching post data:', error)
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
      console.log('Post updated:', response.data)
      navigate(`/vehicles/${vehicle_id}`)
    } catch (error) {
      console.error('Error updating post:', error)
    }
  }

  return (
    <div>
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Model:</label>
          <textarea
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Color:</label>
          <textarea
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Price:</label>
          <textarea
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  )
}

export default VehicleUpdate
