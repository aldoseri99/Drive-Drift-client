import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RegisterUser } from "../services/Auth"
import { Link } from "react-router-dom"
import "./CSS/Register.css"

const Register = () => {
  let navigate = useNavigate()

  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
  const [formValues, setFormValues] = useState(initialState)
  const [previewImage, setPreviewImage] = useState(null)
  const [image, setImage] = useState(null)
  const [imageBase64, setImageBase64] = useState("")

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

    // Check if passwords match
    if (formValues.password !== formValues.confirmPassword) {
      alert("Passwords do not match.")
      return
    }

    // Check if password is at least 8 characters
    if (formValues.password.length < 8) {
      alert("Password must be at least 8 characters long.")
      return
    }

    console.log("Submitting")

    try {
      const response = await RegisterUser(formValues)
      console.log(response)
      navigate("/signIn")
    } catch (error) {
      console.error("Registration failed", error)
    }
  }

  return (
    <div className="signin-col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Username</label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Gorlock The Destroyer"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="image">Profile Picture</label>
            <input
              onChange={handleImage}
              type="file"
              name="image"
              accept="image/*"
            />
          </div>
          {previewImage && (
            <div className="image-preview">
              <img
                src={previewImage}
                alt="Preview"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            </div>
          )}
          <p>
            Already have an account? Sign in <Link to="/signin">here</Link>.
          </p>
          <button
            className="submit"
            disabled={
              !formValues.name ||
              !formValues.email ||
              !formValues.password ||
              !formValues.confirmPassword ||
              formValues.password !== formValues.confirmPassword
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
