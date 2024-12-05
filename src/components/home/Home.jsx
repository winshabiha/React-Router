import { Outlet } from "react-router-dom";
import NavBar from "../header/NavBar";
import Footer from "../footer/Footer";


const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;