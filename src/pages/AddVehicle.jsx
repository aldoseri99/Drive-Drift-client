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
    <div className="form-container">
      <form onSubmit={handleSubmit} action="">
        <div>
          <label className="form-label" htmlFor="">
            Brand
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="brand"
            type="text"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="">
            Model
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="model"
            type="text"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="">
            Color
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="color"
            type="text"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="">
            Category
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="category"
            type="text"
          />
        </div>
        <div>
          <label className="form-label" htmlFor="">
            Description
          </label>
          <textarea
            className="form-control"
            onChange={handleChange}
            name="description"
            type="text"
          />
        </div>
        <input type="submit" className="btn btn-success" />
      </form>
    </div>
  )
}

export default AddVehicle
