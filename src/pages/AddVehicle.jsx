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
  const [image, setImage] = useState(null)
  const [imageBase64, setImageBase64] = useState("")
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

  // convert image file to base64
  const setFileToBase64 = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImageBase64(reader.result)
      setFormValues({ ...formValues, image: reader.result })
    }
  }

  // receive file from form
  const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setFileToBase64(file)
  }

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
      navigate("/viewVehicles")
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
            Price
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="price"
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
        <div>
          <label className="form-label" htmlFor="">
            Image
          </label>
          <input
            className="form-control"
            name="image"
            type="file"
            onChange={handleImage}
          />
        </div>
        <input type="submit" className="btn btn-success" />
      </form>
    </div>
  )
}

export default AddVehicle
