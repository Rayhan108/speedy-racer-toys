import { Link } from "react-router-dom";


const ToysTable = ({toy,i}) => {
    const {toyName,sellerName,category,quantity,price,_id}=toy;
    console.log(toy);
    return (
     <>
        <tr>
        <th>{i+1}</th> 
        <td className="font-semibold text-center">{sellerName}</td> 
        <td className="font-semibold text-center">{toyName}</td> 
        <td className="font-semibold text-center">{category}</td> 
        <td className="font-semibold text-center">${price}</td> 
        <td className="font-semibold text-center">{quantity}</td> 
        <td className="text-center"><Link to={`/${_id}`}><button className="btn">View Details</button></Link></td>
      </tr>
     </>
    );
};

export default ToysTable;