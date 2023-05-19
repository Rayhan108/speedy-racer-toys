import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const MyToys = () => {
    const[toys,setToys]=useState([])
    const {user} =useContext(AuthContext)
useEffect(()=>{
    fetch(`http://localhost:5000/allToys/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        setToys(data)
    })
},[])

    return (
        <div>
            <h1>my toys:{toys.length}</h1>
        </div>
    );
};

export default MyToys;