import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setCategory } from "../services/categoryService"

const AddCategory = () => {
  let navigate = useNavigate()

  const initialState = {
    name: "",
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
      const response = await setCategory(formValues)
      console.log(response)
      navigate("/viewcategories")
    } catch (error) {}
  }

  return (
    <div className="form-container">
      <form className="category-form" onSubmit={handleSubmit} action="">
        <h3> Add Category</h3>
        <div>
          <label className="form-label category-label" htmlFor="">
            Name
          </label>
          <input
            className="form-control category-input"
            onChange={handleChange}
            name="name"
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

export default AddCategory
