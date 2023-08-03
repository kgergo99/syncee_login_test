import styled from "styled-components";
import Logo from "../assets/Google_G_Logo.png";

const Button = styled.button`
    margin-top: 1vh;
    margin-bottom: 1vh;
    padding: 0.7vh;
    background-color: white;
    color: #000;
    border: none;
    border-radius: 25px;
    cursor: pointer;

    font-weight: bold;
    min-height: 6vh;
`;

const GoogleLogo = styled.img`
    width: 4%;
    height: 4%;
    min-width: 20px;
`;

const GoogleButtonText = styled.span`
    padding-left: 2%;
`;

const ContentConnector = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function GoogleButton() {
    return (

            <Button type="submit">
                <ContentConnector>
                <GoogleLogo src={Logo} alt="Logo"/>
                <GoogleButtonText>Sign in with Google</GoogleButtonText>
                </ContentConnector>
            </Button>

    );
}
  
export default GoogleButton;