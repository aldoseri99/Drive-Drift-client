import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { detailVehicle } from "../services/vehicleService"
import { postBookings } from "../services/BookingServices"
import { getInsurances } from "../services/insuranceService"

const AddBooking = ({ user }) => {
  if (user) {
    let navigate = useNavigate()
    const { vehicle_id } = useParams()
    const [vehicle, setVehicle] = useState()
    const [insurances, setInsurances] = useState()
    const [insPrice, setInsPrice] = useState(0)
    const [dateDifferent, setDateDifferent] = useState()
    const [totalPrice, setTotalPrice] = useState(0)
    const [endDateMin, setEndDateMin] = useState(
      new Date().toISOString().split("T")[0]
    )
    const [emails, setEmails] = useState("")

    const initialState = {
      startDate: "",
      endDate: "",
      totalPrice: 0,
      status: "pending",
      insuranceId: "",
      user: user.id,
      vehicle: vehicle_id,
    }
    const [formValues, setFormValues] = useState(initialState)

    useEffect(() => {
      const getDetails = async () => {
        const v = await detailVehicle(vehicle_id)
        setVehicle(v)
        const i = await getInsurances()
        console.log(i[0].insuranceType)

        setInsurances(i)
      }
      getDetails()
    }, [])

    const [selectedInsurance, setSelectedInsurance] = useState(null)

    const handleSelectChange = (e) => {
      const selectedType = e.target.value
      const insurance = insurances.find(
        (insurance) => insurance._id === selectedType
      )

      setFormValues({ ...formValues, [e.target.name]: e.target.value })
      setSelectedInsurance(insurance || null)
      setInsPrice(insurance ? insurance.price : 0)

      // Calculate total price if dates are already selected
      if (formValues.startDate && formValues.endDate) {
        const startDate = new Date(formValues.startDate)
        const endDate = new Date(formValues.endDate)
        const differenceInTime = endDate - startDate
        const daysDifference =
          Math.ceil(differenceInTime / (1000 * 60 * 60 * 24)) + 1

        const totalPrice =
          daysDifference * vehicle.price + (insurance ? insurance.price : 0)
        setTotalPrice(totalPrice)
        const updatedFormValues = {
          ...formValues,
          ["totalPrice"]: totalPrice,
          [e.target.name]: e.target.value,
        }
        setFormValues(updatedFormValues)
      }
    }

    const handleChange = (e) => {
      // Update form values with the new input
      const updatedFormValues = {
        ...formValues,
        [e.target.name]: e.target.value,
      }
      setFormValues(updatedFormValues)

      console.log(e.target.name, e.target.value)
      console.log("Updated formValues:", updatedFormValues)

      if (e.target.name === "startDate") {
        setEndDateMin(e.target.value)
      }

      // Calculate days difference if both dates are available
      if (updatedFormValues.startDate && updatedFormValues.endDate) {
        const startDate = new Date(updatedFormValues.startDate)
        const endDate = new Date(updatedFormValues.endDate)
        const differenceInTime = endDate - startDate
        const daysDifference =
          Math.ceil(differenceInTime / (1000 * 60 * 60 * 24)) + 1

        setDateDifferent(daysDifference)

        // Calculate total price with both vehicle price and insurance price
        const totalPrice = daysDifference * vehicle.price + (insPrice || 0)
        setTotalPrice(totalPrice)
        console.log("Total price:", totalPrice)

        setFormValues((prevFormValues) => ({
          ...prevFormValues,
          totalPrice: totalPrice,
        }))
      }
    }

    const handelSubmit = async (e) => {
      e.preventDefault()
      console.log("Booking submitting")
      const autoEmailData = {
        emails,
      }
      try {
        const response = await postBookings(formValues)
        await axios.post(
          `http://localhost:3001/booking/autoEmail`,
          autoEmailData
        )
        console.log(response)
        navigate("/viewVehicles")
      } catch (error) {}
    }

    return (
      <div>
        {vehicle ? (
          <>
            <div>
              <img src={vehicle.image.url} alt="" />
              <p>{vehicle.brand}</p>
              <p>{vehicle.model}</p>
              <p>{vehicle.price}</p>
            </div>
            <form onSubmit={handelSubmit}>
              <div>
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="date"
                  id="start-date"
                  name="startDate"
                  min={new Date().toISOString().split("T")[0]}
                  required
                  onChange={handleChange}
                />

                <label htmlFor="end-date">End Date</label>
                <input
                  type="date"
                  id="end-date"
                  name="endDate"
                  min={endDateMin}
                  required
                  onChange={handleChange}
                  disabled={!formValues.startDate}
                />
              </div>
              <select
                onChange={handleSelectChange}
                defaultValue=""
                name="insuranceId"
                required
              >
                <option value="" disabled hidden>
                  -
                </option>
                {insurances?.map((insurance) => (
                  <option key={insurance._id} value={insurance._id}>
                    {insurance.insuranceType}
                  </option>
                ))}
              </select>

              {selectedInsurance && (
                <div className="terms-and-conditions">
                  <h3>Terms and Conditions:</h3>
                  <p>{selectedInsurance.termsAndConditions}</p>
                </div>
              )}
              <div className="form-group">
                <label htmlFor="emails">email:</label>
                <input
                  type="email"
                  id="emails"
                  value={emails}
                  onChange={(e) => setEmails(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Book</button>
            </form>
          </>
        ) : null}
        <h3>Total: {totalPrice}</h3>
      </div>
    )
  }
}
export default AddBooking
