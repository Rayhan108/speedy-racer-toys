import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysTable from "./MyToysTable";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MyToys = () => {
  useTitle('MyToys')
    const[toys,setToys]=useState([])
    const {user} =useContext(AuthContext)


    const [activeTab, setActiveTab] = useState("acending");
    useEffect(()=>{
  fetch(`https://assignment11-server-mocha.vercel.app/sortby/${activeTab}`)
  .then(res=>res.json())
  .then(data=>{setToys(data)
  
  console.log(data);
  })
    },[activeTab])
  
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };






useEffect(()=>{
    fetch(`https://assignment11-server-mocha.vercel.app/allToys/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        setToys(data)
        // console.log(data);
    })
},[user])

const handleDelete = (id) => {
 
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://assignment11-server-mocha.vercel.app/post-toys/${id}`, {
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
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
     
    }
  })



    // const proceed = confirm("Are you sure ,you want to delete");
    // if (proceed) {
    //   fetch(`https://assignment11-server-mocha.vercel.app/post-toys/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.deletedCount > 0) {
    //         Swal.fire({
    //             title: 'success!',
    //             text: 'Delete Succesfull',
    //             icon: 'success',
    //             confirmButtonText: 'Cool'
    //           })
    //         const remaining = toys.filter((toy) => toy._id !== id);
    //         setToys(remaining);
    //       }
    //     });
    // }
  };
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center text-cyan-800 mt-5 mb-5">Toys You Added</h1>
            
            
<div className="mb-10">
  
<Tabs>
    <TabList className="font-extrabold text-3xl">
      <Tab 
              onClick={() => handleTabClick("acending")}
             
            >Acending</Tab>
      <Tab  onClick={() => handleTabClick("decending")}
             >Decending</Tab>
     
    </TabList>

    <TabPanel>
     {activeTab&& <h2 className=" text-2xl font-semibold mt-10 text-cyan-800">Low To High</h2>}
    </TabPanel>
    <TabPanel>
   {activeTab &&   <h2 className="text-2xl font-semibold mt-10 text-cyan-800">High To Low</h2>}
    </TabPanel>
 
  </Tabs>
  
  </div> 
            
            
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