import { useUserAuth } from "../context/UserAuthContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

const Button = styled.div `
    background-color: var(--base-blue);
    border-radius: 12px;
    padding: 2vh;
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;

    height: 20%;
    max-height: 50px;

    box-shadow: 0px 4px 8px 1px rgba(0,0,0, 0.30);

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;
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