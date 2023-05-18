import { useEffect, useState } from "react";


const AllToys = () => {
    const [toys,setToys]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setToys(data)
        })
    },[])
    console.log(toys);
    return (
        <div>
            <h1>All toys</h1>
        </div>
    );
};

export default AllToys;