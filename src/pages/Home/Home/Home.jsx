
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/GAllary";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <div className="flex font-extrabold items-center justify-center mb-10">
            <Tabs>
    <TabList>
      <Tab>Bike</Tab>
      <Tab>Sports Car</Tab>
      <Tab>Mini Train</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
  </Tabs>
            </div>
 
        </div>
    );
};

export default Home;