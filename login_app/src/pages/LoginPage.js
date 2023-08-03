import LoginForm from "../components/LoginForm";
import GoogleButton from "../components/GoogleButton";
import LoginSeparator from "../components/LoginSeparator"; 
import styled from "styled-components";
import SynceeLogoImage from "../assets/syncee-logo-300px.png";

const PageContainer = styled.div`
    padding 5vw;
    display: flex; /* Add flex to the PageContainer */
    justify-content: center; /* Center the contents horizontally */
`;

const InputContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    overflow: auto;
    position: relative;

    padding: 8vw;
    flex: 2;
`;

const ImageContainer = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    overflow: auto;
    position: relative;
    padding: 8vw;
    flex: 3;
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
    width: 30%; /* Scale the image down to fit the container width */
    height: 30%; /* Scale the image down to fit the container height */
`;

const Footer = styled.span`
    color: #999;
    font-weight: 400;
    position: absolute;
    bottom: 8vw;
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
                <Footer>2022 Syncee. All rights reserved</Footer>
            </InputContainer>
        </PageContainer>
    );
  }
  
export default LoginPage;