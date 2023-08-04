import styled from "styled-components";
import Logo from "../assets/Google_G_Logo.png";
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Button = styled.button`
    padding: 0.7vh;
    background-color: white;
    color: #000;
    border: 1px #ccc solid;
    border-radius: 25px;
    cursor: pointer;

    font-weight: bold;

    height: 10vw;
    min-height: 6vh;
    max-height: 50px;
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
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {googleSignIn} = useUserAuth();

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await googleSignIn();
            navigate("/home");
        } catch (err) {
            setError(err.message);
            toast.error(err.message);
        }
    };

    return (
            <Button type="submit">
                <ContentConnector>
                <GoogleLogo src={Logo} alt="Logo"/>
                <GoogleButtonText onClick={ handleGoogleSignIn }>Sign in with Google</GoogleButtonText>
                </ContentConnector>
            </Button>

    );
}
  
export default GoogleButton;