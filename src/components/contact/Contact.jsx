import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";


const Contact = () => {
    const users = useLoaderData()

    
    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',gap:'20px'}}>
            {
                users.map(user=><SingleUser key = {user.id} user = {user}></SingleUser>)
            }
        </div>
    );
};

export default Contact;