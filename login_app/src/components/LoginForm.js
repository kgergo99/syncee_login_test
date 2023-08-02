import { useState } from "react";
import styled from "styled-components";
import { useUserAuth } from "../context/UserAuthContext";
import { auth } from "../firebase";

const FormContainer = styled.div`
    font-size: 13px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;

    width: 50%;
`;

const Input = styled.input`
    margin-top: 0.8vh;
    margin-bottom: 1.2vh;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 20px; 
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
    gap: 0px 2vw;
`;

const CheckboxLabel = styled.label`
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
    width: 15px;
    height: 15px;
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

const Button = styled.button`
    margin-top: 2vh;
    margin-bottom: 2vh;
    padding: 1.6vh;
    background-color: var(--accent-color);
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
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
                        {rememberMe && <span style={{ color: "white" }}>&#10003;</span>}
                    </CustomCheckbox>
                    <CheckboxLabel htmlFor="rememberMe">Remember me</CheckboxLabel>
                </CheckboxConnector>
                <Link href="">Forget password?</Link>
            </CheckboxContainer>
            <Button type="submit">Login</Button>
            <div>
                Not registered yet? <a href="">Create an account</a>
            </div>
        </Form>
      </FormContainer>
    );
  }
  
  export default LoginForm;