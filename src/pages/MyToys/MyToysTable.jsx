import { Link } from "react-router-dom";


const MyToysTable = ({toy,i}) => {
    console.log(toy);
    const {toyName,sellerName,category,quantity,price,_id,photoUrl,sellerEmail}=toy;
    return (
     
               <tr className="text-center">
                <th>{i+1}</th> 
       
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Name: {toyName}</div>
              <div className="text-sm font-bold opacity-50">Category: {category}</div>
              <div className="text-sm font-bold opacity-50">Price: {price}</div>
              <div className="text-sm font-bold opacity-50">Ouantity: {quantity}</div>
            </div>
          </div>
        </td>
        <td>
          {sellerName}
          <br/>
          <span className="badge badge-ghost badge-sm">Seller</span>
        </td>
        <td>
          {sellerEmail}
          <br/>
          <span className="badge badge-ghost badge-sm">Seller</span>
        </td>
        
        <th>
         <Link to={`/update/${_id}`}> <button  className="btn  btn-sm">Update</button></Link>
        </th>
        <th>
       <Link to={`/delete/${_id}`}>   <button  className="btn  btn-sm">Delete</button></Link>
        </th>
      </tr>
       
    );
};

export default MyToysTable;