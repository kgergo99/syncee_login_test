import LoginForm from "../components/LoginForm";
import GoogleButton from "../components/GoogleButton";
import LoginSeparator from "../components/LoginSeparator"; 
import styled, { css } from "styled-components";
import SynceeLogoImage from "../assets/syncee-logo-300px.png";
import SynceeWallpaper from "../assets/syncee_frontend_test_wallpaper.png"

const PageContainer = styled.div`
    padding 0px;
    display: flex;
    height: 100vh;


    @media (min-width: 600px) {
        flex-wrap: wrap;
    }
`;

const InputContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: left;
    

    

    padding: 8vh 5vw;
    padding-bottom: 0;
    height: 100vh;

    @media (min-width: 600px) {
        flex-basis: 50%;
    }
`;

const ImageContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    flex-basis: 50%;
    
    display: none;
    background-image: url("${SynceeWallpaper}");
    background-position: center;
    background-size: cover; 

    @media (min-width: 600px) {
        display: flex;
    }
`;

const Wallpaper = styled.img`

`;

const Header = styled.span`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 12px;
`;

const SubHeader = styled.span`
    margin-bottom: 40px;
`;

const SynceeLogo = styled.img`
    margin-bottom: 35px;
    width: 30%;
    height: 10%;
    object-fit: contain;
    
`;

function LoginPage() {
    return (
        <PageContainer>
            <InputContainer>
                <SynceeLogo src={SynceeLogoImage} alt="Syncee Logo"/>
                <Header>Login</Header>
                <SubHeader>See your growth and get consulting support!</SubHeader>
                <GoogleButton/>
                <LoginSeparator/>
                <LoginForm/>
            </InputContainer>
            <ImageContainer/>
        </PageContainer>
    );
  }
  
export default LoginPage;