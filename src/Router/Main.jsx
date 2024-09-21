import { Outlet } from "react-router-dom";
import Fotter from "../component/Fotter";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner/>
            <Outlet />
            <Fotter></Fotter>
        </div>
    );
};

export default Main;