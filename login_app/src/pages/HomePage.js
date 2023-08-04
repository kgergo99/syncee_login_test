import { useUserAuth } from "../context/UserAuthContext";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

const Button = styled.button`
    margin-top: 1vh;
    margin-bottom: 2vh;
    padding: 1.6vh;
    background-color: var(--accent-color);
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;

    height: 10vw;
    max-height:40px;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
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
        navigate("/listing");
    }
    

    return (
        <div>
            <h1>Welcome!</h1>
            {user && <h2>Your email address: {user.email}</h2>}
            {user && <h2>Your password can't be shown due to Firebase's security</h2>}
            {!user && <h2>You are not logged in!</h2>}
            <ButtonContainer>
                <Button onClick={handleLogout}>Logout</Button>
                <Button onClick={handleClick}>To the API response</Button>
            </ButtonContainer>
            
        </div>
    );
  }
  
export default HomePage;