import { useEffect, useState } from "react"
import { getReviews } from "../services/ReviewService"

const ReviewsCard = ({ vehicle }) => {
  const [reviews, setReviews] = useState()
  useEffect(() => {
    const getAllReviews = async () => {
      const response = getReviews()
      const rev = response.filter((review) => {
        return review.vehicle === vehicle._id
      })
      console.log(rev)
      setReviews(rev)
    }
    getAllReviews()
  }, [vehicle])
  return (
    <div>
      {reviews?.map((review) => (
        <div>
          <h1>{review.rating}</h1>
        </div>
      ))}
    </div>
  )
}
export default ReviewsCard
