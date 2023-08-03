import LoginForm from "../components/LoginForm";
import GoogleButton from "../components/GoogleButton";
import styled from "styled-components";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    
`;

function LoginPage() {
    return (
        <PageContainer>
            {/* <SynceeLogo/> */}
            {/* <LoginHeaderText/> */}
            <GoogleButton/>
            {/* <LoginSeparator></LoginSeparator> */}
            <LoginForm/>
            {/* <LoginImage></LoginImage> */}
        </PageContainer>
    );
  }
  
export default LoginPage;