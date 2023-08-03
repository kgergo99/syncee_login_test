import LoginForm from "../components/LoginForm";
import GoogleButton from "../components/GoogleButton";
import LoginSeparator from "../components/LoginSeparator"; 
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    overflow: auto;
`;

function LoginPage() {
    return (
        <PageContainer>
            {/* <SynceeLogo/> */}
            {/* <LoginHeaderText/> */}
            <GoogleButton/>
            <LoginSeparator/>
            <LoginForm/>
            {/* <LoginImage></LoginImage> */}
        </PageContainer>
    );
  }
  
export default LoginPage;