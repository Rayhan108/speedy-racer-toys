import { Outlet} from 'react-router-dom';
import Navbar from '../../pages/Home/Navbar/Navbar';
import Footer from '../../pages/Home/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;