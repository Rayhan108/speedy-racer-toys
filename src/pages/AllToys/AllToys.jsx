import { useEffect, useState } from "react";
import ToysTable from "./ToysTable";
import useTitle from "../../hooks/useTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const AllToys = () => {
  useTitle('AllToys')
  const [searchText, setSearchText] = useState("");
  const [toys, setToys] = useState([]);

  const [activeTab, setActiveTab] = useState("");
  useEffect(()=>{
fetch(`https://assignment11-server-mocha.vercel.app/sortby/${activeTab}`)
.then(res=>res.json())
.then(data=>setToys(data))
  },[activeTab])

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch("https://assignment11-server-mocha.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, []);
  // console.log(toys);
  // search function
  const handleSearch = () => {
    fetch(`https://assignment11-server-mocha.vercel.app/toys/searchbyToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  };
  return (
    <div>
        <h1 className="text-center text-3xl font-extrabold text-cyan-800 mb-5 mt-5">
        All Toys
      </h1>
  <div className="flex flex-grow-1">
    
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
  <div>
  <div className="flex ml-5 justify-center mb-5 mt-5">
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search"
          className="input input-bordered"
          style={{ width: "400px" }}
        />
        <button onClick={handleSearch} className="btn  ml-3">
          Search
        </button>
      </div>
  </div>
  </div>
    <div className="overflow-x-auto mt-5 mb-5">
    
     
      <table className="table table-compact w-full">
        <thead className="text-center">
          <tr>
            <th></th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, i) => (
            <ToysTable key={toy._id} toy={toy} i={i}></ToysTable>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AllToys;
