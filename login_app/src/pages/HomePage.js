import { useUserAuth } from "../context/UserAuthContext";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
const Button = styled.button`

`;

function HomePage() {
    const {user, logOut} = useUserAuth();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logOut();
        }catch (err) {
            console.warn(err.message);
        }
    }

    const handleClick = () => {
        navigate("/");
    }
    

    return (
        <div>
            <h1>Welcome!</h1>
            {user && <h2>Your email address: {user.email}</h2>}
            {user && <h2>Your password can't be shown due to Firebase's security</h2>}
            {!user && <h2>You are not logged in!</h2>}
            <Button onClick={handleLogout}>Logout</Button>
            <Button onClick={handleClick}>To the API response</Button>
        </div>
    );
  }
  
export default HomePage;