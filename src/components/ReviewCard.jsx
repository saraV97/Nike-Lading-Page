import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        width={120}
        height={120}
        className="rounded-full object-cover "
      />

      <p className="mt-6 info-text text-center max-w-sm">{feedback}</p>
      <div className="mt-3 justify-center flex items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-bold text-3xl font-palanquin text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
