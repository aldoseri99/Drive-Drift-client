import { useEffect, useState } from "react"
import { getReviews } from "../services/ReviewService"

const ReviewsCard = ({ vehicle }) => {
  const [reviews, setReviews] = useState()
  useEffect(() => {
    const getAllReviews = async () => {
      const response = await getReviews()
      const rev = response.filter((review) => {
        return review.vehicle === vehicle._id
      })
      console.log(rev)
      setReviews(rev)
    }
    getAllReviews()
  }, [])
  return (
    <div className="reviews">
      {reviews?.map((review) => (
        <div className="review-card" key={review.user.id}>
          <p className="rating">Rating: {review.rating}⭐</p>
          <p className="review-text">{review.review}</p>
          <p className="user-name">- {review.user.name}</p>
        </div>
      ))}
    </div>
  )
}
export default ReviewsCard
