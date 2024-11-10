import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setVehicle } from "../services/vehicleService"

const AddVehicle = () => {
  let navigate = useNavigate()

  const initialState = {
    brand: "",
    model: "",
    description: "",
    color: "",
    category: "",
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    console.log(e.target.name, e.target.value)

    console.log("Updated formValues:", {
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("submitting")
    try {
      const response = await setVehicle(formValues)
      console.log(response)
      navigate("/")
    } catch (error) {}
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="">Brand</label>
          <input onChange={handleChange} name="brand" type="text" />
        </div>
        <div>
          <label htmlFor="">Model</label>
          <input onChange={handleChange} name="model" type="text" />
        </div>
        <div>
          <label htmlFor="">Price Per Day</label>
          <input onChange={handleChange} name="price" type="number" />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input onChange={handleChange} name="description" type="text" />
        </div>
        <div>
          <label htmlFor="">Color</label>
          <input onChange={handleChange} name="color" type="text" />
        </div>
        <div>
          <label htmlFor="">Category</label>
          <input onChange={handleChange} name="category" type="text" />
        </div>
        <input type="submit" className="btn" />
      </form>
    </div>
  )
}

export default AddVehicle
