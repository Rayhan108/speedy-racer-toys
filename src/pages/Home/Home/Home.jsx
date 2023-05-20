
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/GAllary";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToysCard from "./ToysCard";
import useTitle from "../../../hooks/useTitle";
import Recomended from "./Recomended";
import Upcoming from "./Upcoming";

const Home = () => {
  useTitle('Home')
    const [toys,setToys]=useState([])
    const [activeTab, setActiveTab] = useState("");
    useEffect(()=>{
fetch(`https://assignment11-server-mocha.vercel.app/toys/${activeTab}`)
.then(res=>res.json())
.then(data=>setToys(data))
    },[activeTab])
    // console.log(toys);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <div className="flex font-extrabold items-center justify-center mb-10">
 
            <Tabs>
    <TabList className="font-extrabold text-3xl">
      <Tab 
              onClick={() => handleTabClick("bike")}
             
            >Bike</Tab>
      <Tab  onClick={() => handleTabClick("sports-car")}
             >Sports Car</Tab>
      <Tab  onClick={() => handleTabClick("mini-train")}
             >Mini Train</Tab>
    </TabList>

    <TabPanel>
     {activeTab&& <h2 className="text-center text-2xl font-extrabold mt-10 text-cyan-800">Bike Toys </h2>}
    </TabPanel>
    <TabPanel>
   {activeTab &&   <h2 className="text-center text-2xl font-extrabold mt-10 text-cyan-800">Sports Car Toys</h2>}
    </TabPanel>
    <TabPanel>
  {activeTab &&    <h2 className="text-center text-2xl font-extrabold mt-10 text-cyan-800">Mini Train Toys</h2>}
    </TabPanel>
  </Tabs>
            </div>

 <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mb-10 overflow-x-hidden">
    {
       toys.map(toy=><ToysCard key={toy._id} toy={toy}></ToysCard>) 
    }
 </div>



<Recomended></Recomended>
<Upcoming></Upcoming>






 
        </div>
    );
};

export default Home;