import { useEffect, useState } from "react";
import ToysTable from "./ToysTable";

const AllToys = () => {
  const [searchText,setSearchText]=useState("")
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, []);
  console.log(toys);
  const handleSearch = () => {
    fetch(`http://localhost:5000/searchbyToy/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  };
  return (
    <div className="overflow-x-auto mt-5 mb-5">
      <h1 className="text-center text-3xl font-extrabold text-cyan-800 mb-5 mt-5">
        All Toys
      </h1>
      <div className="flex ml-5 justify-center mb-5 mt-5">
        <input
          type="text"
          onChange={(e)=>setSearchText(e.target.value)}
          placeholder="Search"
          className="input input-bordered"
          style={{ width: "400px" }}
        />
        <button onClick={handleSearch} className="btn  ml-3">Search</button>
      </div>
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
  );
};

export default AllToys;
