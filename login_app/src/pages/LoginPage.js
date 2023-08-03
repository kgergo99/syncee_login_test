import LoginForm from "../components/LoginForm";
import GoogleButton from "../components/GoogleButton";
import LoginSeparator from "../components/LoginSeparator"; 
import styled from "styled-components";
import SynceeLogoImage from "../assets/syncee-logo-300px.png";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    overflow: auto;
    position: relative;
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
    bottom: 0px;
`;


function LoginPage() {
    return (
        <PageContainer>
            <SynceeLogo src={SynceeLogoImage} alt="Syncee Logo"/>
            <Header>Login</Header>
            <SubHeader>See your growth and get consulting support!</SubHeader>
            <GoogleButton/>
            <LoginSeparator/>
            <LoginForm/>
            <Footer>2022 Syncee. All rights reserved</Footer>
        </PageContainer>
    );
  }
  
export default LoginPage;