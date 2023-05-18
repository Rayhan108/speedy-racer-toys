import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useLoaderData } from "react-router-dom";

const Details = () => {
    const toy = useLoaderData()
    const {photoUrl,toyName,description,price,rating,quantity,sellerName,
    }=toy || {}
    console.log(toy);
    return (
        <div className="bg-base-100">
         <h1 className="text-5xl font-bold text-center mt-10 text-cyan-800 ">Toy Details</h1>
         <div className="hero min-h-screen ">
           
           <div className="hero-content flex-col lg:flex-row">
             <img src={photoUrl} className="max-w-xl rounded-lg shadow-2xl" />
             <div>
               <h1 className="text-5xl font-bold">{toyName}</h1>
               <p className="py-6">{description}</p>
               <div className="btn-group">
     <p className="btn ">Seller Name: {sellerName}</p>
     <p className="btn btn-outline"> Price:${price}</p>
     <p className="btn btn-outline">Quantity:{quantity}</p>
   </div>
  <div  className="flex  items-center mt-5">
  <Rating style={{ maxWidth: 150 }} value={Math.round(rating)} onChange={rating} readOnly />
           <span className='ml-3'>{rating}</span>   </div> 
             </div>
           </div>
         </div>
        </div>
   
    );
};

export default Details;