import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";


const MyToys = () => {
    const[toys,setToys]=useState([])
    const {user} =useContext(AuthContext)
useEffect(()=>{
    fetch(`http://localhost:5000/allToys/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        setToys(data)
        // console.log(data);
    })
},[user])

const handleDelete = (id) => {
 
    const proceed = confirm("Are you sure ,you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/post-toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
                title: 'success!',
                text: 'Delete Succesfull',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            const remaining = toys.filter((booking) => booking._id !== id);
            setToys(remaining);
          }
        });
    }
  };
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center text-cyan-800 mt-5 mb-5">Toys You Added</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className="text-center">
       
        <th>Index</th>
        <th>Toy Info</th>
        <th>Seller Name</th>
        <th>Seller Email</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
   {
    toys.map((toy,i)=><MyToysTable key={toy._id} toy={toy} i={i} handleDelete={handleDelete}></MyToysTable>)
   }
   
   
     
 
    </tbody>
  
    
  </table>
</div>
        </div>
    );
};

export default MyToys;