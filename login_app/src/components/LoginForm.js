import { useState } from "react";
import styled from "styled-components";
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../firebase";

const FormContainer = styled.div`
    font-size: 1.5vh;
    font-weight: 600;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
`;

const Input = styled.input`
    margin-top: 0.8vh;
    margin-bottom: 1.2vh;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 25px; 

    min-height: 6vh;
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
    font-size: 1.5vh
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
    margin-top: 2vh;
    margin-bottom: 2vh;
    padding: 1.6vh;
    background-color: var(--accent-color);
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;

    min-height: 6vh;
`;

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState("");
    const [error, setError] = useState("");

    const {signUp, googleSignIn} = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            //navigate("/page"); //This is where the user goes after creating account
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
            <CheckboxContainer>
                <CheckboxConnector>
                    <Checkbox
                        type="checkbox"
                        id="rememberMe"
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <CustomCheckbox checked={rememberMe}>
                        {rememberMe && <CheckMark>&#10003;</CheckMark>}
                    </CustomCheckbox>
                    <CheckboxLabel htmlFor="rememberMe">Remember me</CheckboxLabel>
                </CheckboxConnector>
                <Link href="">Forget password?</Link>
            </CheckboxContainer>
            <Button type="submit"><FontSizer>Login</FontSizer></Button>
            <div>
                Not registered yet? <a href="">Create an account</a>
            </div>
        </Form>
      </FormContainer>
    );
  }
  
  export default LoginForm;