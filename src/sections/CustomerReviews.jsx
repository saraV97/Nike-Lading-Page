import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-4xl text-center ">
        What Our
        <span className="text-coral-red"> Customers</span> Say?
      </h3>
      <p className="info-text mt-4 max-w-lg text-center m-auto">
        Here genuine stories from our satisfied customers about their
        exceptional experience with us?
      </p>
      <div className="justify-evenly mt-24 flex flex-1 item-center gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
