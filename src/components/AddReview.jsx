import { useEffect, useState } from "react"
import { getBookings } from "../services/BookingServices"
import { postReview } from "../services/ReviewService"

const AddReview = ({ user, vehicle }) => {
  if (user) {
    const [canReview, setCanReview] = useState(false)
    const [rating, setRating] = useState(0)
    const initialState = {
      review: "",
      rating: 0,
      user: user.id,
      vehicle: vehicle._id,
    }
    const [formValues, setFormValues] = useState(initialState)
    const rateValues = [1, 2, 3, 4, 5]

    useEffect(() => {
      const checkReview = async () => {
        const response = await getBookings()
        const bookings = response.filter((booking) => {
          return (
            booking.vehicle._id === vehicle._id && booking.user._id === user.id
          )
        })
        if (bookings.length > 0) {
          setCanReview(true)
          setFormValues({ ...formValues, user: user.id, vehicle: vehicle._id })
        }
      }

      checkReview()
    }, [user])
    const handleRating = (value) => {
      setRating(value)
      setFormValues({ ...formValues, ["rating"]: value })
    }

    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handelRateSubmit = async (e) => {
      e.preventDefault()
      try {
        const response = await postReview(formValues)
        console.log(response)
        setFormValues(initialState)
        setRating(0)
      } catch (error) {}
    }
    return (
      <>
        {canReview ? (
          <div>
            <form className="review-container" onSubmit={handelRateSubmit}>
              <div>
                <label htmlFor="">Rate</label>
                <div>
                  {rateValues.map((value) => (
                    <button
                      type="button"
                      key={value}
                      onClick={() => handleRating(value)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className={
                          value <= rating
                            ? "fa-solid fa-star"
                            : "fa-regular fa-star"
                        }
                      ></i>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="">Comment</label>
                <textarea
                  name="review"
                  value={formValues.review}
                  onChange={handleChange}
                  id=""
                ></textarea>
              </div>
              <button className="submit-btn">Submit</button>
            </form>
          </div>
        ) : null}
      </>
    )
  }
}

export default AddReview
