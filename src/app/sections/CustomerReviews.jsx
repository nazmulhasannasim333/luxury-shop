import ReviewCard from '../components/ReviewCard';
import { reviews } from "../datas/index";

const CustomerReviews = () => {
    return (
        <section className='bg-slate-100 py-24'>
<div className='max-container'>
      <h3 className=' text-center text-5xl font-bold'>
        What Our
        <span className='text-sky-400'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </div>
        </section>
        
    );
};

export default CustomerReviews;