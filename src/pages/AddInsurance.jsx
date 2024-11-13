import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getInsurances } from "../services/insuranceService"
import "./CSS/AddInsurance.css"

const AddInsurance = () => {
  let navigate = useNavigate()

  const initialState = {
    insuranceType: "",
    price: null,
    termsAndConditions: "",
  }

  const [formValues, setFormValues] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)

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
      const response = await getInsurances(formValues)
      console.log(response)
      navigate("/")
    } catch (error) {}
  }

  return (
    <div className="form-container">
      <div className="AddInsu">
        <form onSubmit={handleSubmit} action="">
          <div>
            <label className="form-label" htmlFor="">
              Insurance Type
            </label>
            <input
              className="form-control"
              onChange={handleChange}
              name="insuranceType"
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
              Terms And Conditions
            </label>
            <input
              className="form-control"
              onChange={handleChange}
              name="termsAndConditions"
              type="text"
            />
          </div>
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    </div>
  )
}

export default AddInsurance
