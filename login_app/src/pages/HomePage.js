import { useUserAuth } from "../context/UserAuthContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

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

    const handleClick = () => {
        navigate("/listing");
    }
    

    return (
        <div>
            <TopBar email={user.email} logout={logOut}/>
            <ButtonContainer>
                <Button onClick={handleClick}>To the API response</Button>
            </ButtonContainer>
            
        </div>
    );
  }
  
export default HomePage;