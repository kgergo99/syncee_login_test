import { useUserAuth } from "../context/UserAuthContext";
import styled from "styled-components";

const Button = styled.button`

`;

function HomePage() {
    const {user, logOut} = useUserAuth();

    const handleLogout = async () => {
        try {
            await logOut();
        }catch (err) {
            console.warn(err.message);
        }
    }
    

    return (
        <div>
            <h1>Welcome!</h1>
            {user && <h2>Your email address: {user.email}</h2>}
            {user && <h2>Your password can't be shown due to Firebase's security</h2>}
            {!user && <h2>You are not logged in!</h2>}
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
  }
  
export default HomePage;