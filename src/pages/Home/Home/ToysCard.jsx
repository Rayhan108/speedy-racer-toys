import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";


const ToysCard = ({toy}) => {
    // console.log(toy);
    const {photoUrl,toyName,rating,price,_id}=toy || {};
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photoUrl} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Toys Name: {toyName}</h2>
          <p className="font-semibold">Toys Price:${price}</p>
          <div  className="flex  items-center ">
  <Rating style={{ maxWidth: 100 }} value={Math.round(rating)} onChange={rating} readOnly />
           <span className='ml-3'>{rating}</span>   </div> 
          <div className="card-actions">
          <Link to={`/home/${_id}`}>  <button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ToysCard;