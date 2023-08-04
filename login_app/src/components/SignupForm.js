import { useState } from "react";
import styled from "styled-components";
import { useUserAuth } from "../context/UserAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { isEmailValid, isPasswordValid } from "../scripts/validation";

const FormContainer = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0px;
    overflow: auto;
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    flex-grow: 1;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
`;

const Input = styled.input`
    margin-top: 0.8vw;
    margin-bottom: 1.2vw;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 25px; 

    height: 10vw;
    max-height: 50px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;
const CheckboxConnector = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0px 0.5vw;
`;

const CheckboxLabel = styled.label`
`;
const FontSizer = styled.span`
    font-size: 18px
`;

const Link = styled.a` 
`;

const Checkbox = styled.input`
    margin 0px;
    margin-right: 1.8vw;

    opacity: 0;
    position: absolute;
    
`;

const CustomCheckbox = styled.div`
    width: 2vw;
    height: 2vw;
    padding: 9px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background-color: ${props => (props.checked ? "var(--accent-color)" : "white")};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const ColorizedSpan = styled.span`
  color: var(--accent-color);
`;

const CheckMark = styled.span`
    color: white;
`;

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
    max-height: 50px;
`;

const Footer = styled.span`
    color: #999;
    font-weight: 400;
    margin-bottom: 20px;
    margin-top:20px;
`;

function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState("");
    const [error, setError] = useState("");

    const {signUp} = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            if(isPasswordValid(password)) {
                await signUp(email, password);
                navigate("/");
            }
            else {
                setError("Invalid Password!")
                console.log("Invalid Password!")
            }
            
        }catch (err) {
            setError(err.message);
        }
    }

    return (
      <FormContainer>
        <Form onSubmit={handleSubmit}>
            <label htmlFor="email">Email<ColorizedSpan>*</ColorizedSpan></label>
            <Input
                id="email"
                className="email"
                type="email"
                placeholder="mail@website.com"
                onChange={ (e) => setEmail(e.target.value) }
            />
            <label htmlFor="password">Password<ColorizedSpan>*</ColorizedSpan></label>
            <Input
                id="pwd"
                className="pwd"
                type="password"
                placeholder="Min. 8 character"
                onChange={ (e) => setPassword(e.target.value) }
            />
            <Button type="submit"><FontSizer>Signup</FontSizer></Button>
            <div>
                Already registered? <Link href="/">Log in!</Link>
            </div>
        </Form>
        <Footer>2022 Syncee. All rights reserved</Footer>
      </FormContainer>
    );
  }
  
  export default SignupForm;