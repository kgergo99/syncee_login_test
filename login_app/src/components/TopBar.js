import styled from "styled-components"
import SynceeImage from "../assets/syncee-logo-300px.png"
import { useUserAuth } from "../context/UserAuthContext";
import { useState,useEffect } from "react";
import BurgerSvg from "../assets/burgermenu.svg"

const Bar = styled.div `
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 4px 8px 1px rgba(0,0,0, 0.20);
    height: 8vh;
    position: relative;

    @media screen and (max-width: 600px) {
        justify-content: space-around;
    }
`;

const S_Logo = styled.img `
    height: 60%;

    @media screen and (max-width: 600px) {
        padding-left: 0;
    }
    @media screen and (max-width: 300px) {
        display: none;
    }
`;

const UserText = styled.span `
    font-weight: bold;
    color: black;

`;

const MenuUserText = styled.span `
    font-weight: bold;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Button = styled.div `
    background-color: var(--base-blue);
    border-radius: 12px;
    padding: 2vh;
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;

    height: 20%;
    max-height: 50px;
`;
const ButtonText = styled.span `
    font-weight: bold;
    font-size: 2vh;
`;

const Elements = styled.div `
    display: none;
    align-items: center;
    justify-content: space-between;
    gap: 4vw;

    @media screen and (min-width: 600px) {
        display: flex;
    }
`;

const MenuImg = styled.img `
    width: 4vh;
    color: white;
`;

const MenuButtonContainer = styled.div `
    @media screen and (min-width: 600px) {
        display: none;
    }
`;

const MenuContainer = styled.div `
    padding: 1.2vh;
    height: 12vh;
    width: 50vw;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0px 4px 8px 1px rgba(0,0,0, 0.20);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1vh;
    position: absolute;
    top: 110%;
    right: 10%;
`;

function TopBar({email, logout}) {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const handleLogout = async () => {
        try {
            await logout();
        }catch (err) {
            console.warn(err.message);
        }
    }

    const handleMenuClick = () => {
        setIsMenuActive(!isMenuActive);
    }

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 600) {
            setIsMenuActive(false);
        }
        };
        window.addEventListener("resize", handleResize);

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);


    return(
        <Bar>
            <S_Logo src={SynceeImage}></S_Logo>
            <Elements>
                <UserText>Welcome {email}!</UserText>
                <Button onClick={handleLogout}><ButtonText>Logout</ButtonText></Button>
            </Elements>
            <MenuButtonContainer>
                <Button onClick={handleMenuClick}><MenuImg src={BurgerSvg}></MenuImg></Button>
            </MenuButtonContainer>
            {isMenuActive && <MenuContainer>
                <MenuUserText>{email}</MenuUserText>
                <Button onClick={handleLogout}><ButtonText>Logout</ButtonText></Button>
            </MenuContainer>}
        </Bar>
    )
}

export default TopBar