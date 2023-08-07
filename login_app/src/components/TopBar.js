import styled from "styled-components"
import SynceeImage from "../assets/syncee-logo-300px.png"
import { useUserAuth } from "../context/UserAuthContext";
import { useState } from "react";

const Bar = styled.div `
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const S_Logo = styled.img `

`;

const UserText = styled.span `
    font-weight: bold;
    color: black;
`;

const Button = styled.div `
    background-color: #286DF8;
    border-radius: 12px;
    padding: 20px;
    background-color: var(--accent-color);
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;

    height: 10vw;
    max-height: 50px;
`;
const ButtonText = styled.span `
    font-weight: bold;
    font-size: 18px;
`;

const AlignHelper = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4vw;
`;

function TopBar({email}) {

    return(
        <Bar>
            <S_Logo src={SynceeImage}></S_Logo>
            <AlignHelper>
                <UserText>Welcome {email}!</UserText>
                <Button><ButtonText>Logout</ButtonText></Button>
            </AlignHelper>
        </Bar>
    )
}

export default TopBar