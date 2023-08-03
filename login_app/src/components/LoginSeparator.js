import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Line = styled.div`
    flex: 1;
    height: 1px;
    background-color: #bbb;
`;

const Text = styled.div`
    margin: 0 15px;
    color: #bbb;
    font-size: 11px;
    font-weight: 500;
`;

function LoginSeparator() {
    return (
        <Container>
            <Line/>
            <Text>Or Sign in with Email</Text>
            <Line/>
        </Container>
    );
}
  
export default LoginSeparator;