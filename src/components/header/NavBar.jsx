import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <h1>Nav bar</h1>
            <div style={{display:"flex", gap:'30px'}}>
             <Link to="/">Home</Link>
             <Link to="/contact">Contact</Link>
             <Link to="/about">About</Link>
             <Link to="/service">Service</Link>
            </div>

        </div>
    );
};

export default NavBar;

