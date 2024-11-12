import axios, { Axios } from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const AddInsurance = () => {
  let navigate = useNavigate()

  const initialState = {
    insuranceType: "",
    price: "",
    termsAndConditions: "",
  }

  const [formValues, setFormValues] = useState(initialState)
  const [insuranceType, setInsuranceType] = useState("")
  const [price, setPrice] = useState("")
  const [termsAndConditions, setTermsAndConditions] = useState("")

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
      const response = await axios.post(`http://localhost:3001/insurance/`, formValues)
      console.log(response)
      navigate("/viewInsurances")
    } catch (error) {}
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} action="">
        <div>
          <label className="form-label" htmlFor="">
          insurance Type:
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="insuranceType"
            type="text"
            value={formValues.insuranceType}
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
            value={formValues.price}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="">
            terms And Conditions:
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="termsAndConditions"
            type="text"
            value={formValues.termsAndConditions}
          />
        </div>
        <input type="submit" className="btn btn-success" />
      </form>
    </div>
  )
}

export default AddInsurance
