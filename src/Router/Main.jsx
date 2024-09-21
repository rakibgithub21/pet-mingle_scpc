import { Outlet } from "react-router-dom";
import Fotter from "../component/Common/Fotter";
import Navbar from "../component/Common/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Fotter></Fotter>
        </div>
    );
};

export default Main;