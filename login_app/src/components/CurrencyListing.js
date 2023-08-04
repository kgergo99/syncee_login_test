import React, { useEffect, useState } from "react";
import fetchCurrencies from "../scripts/fetchdata";
import styled from "styled-components";
import { useNavigate } from "react-router";

const ListingHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    max-height:40px;
`;


const CurrencyList = () => {
    const [currencies, setCurrencies] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/home");
    }

    useEffect(() => {
      const fetchData = async () => {
        console.log("fetch start");
        const response = await fetchCurrencies();
        console.log("fetch end", response);
  
        // Make sure response.data is an array before setting it as the state
        if (Array.isArray(response.data)) {
          setCurrencies(response.data);
        } else {
          console.error("Invalid data format:", response);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <ListingHeader>
            <h1>Currency List</h1>
            <Button onClick={handleClick}>Back</Button>
        </ListingHeader>
        
        <ul>
          {currencies.map((currency) => (
            <li key={currency.id}>{currency.name} | {currency.id} | Min. size: {currency.min_size}</li>
          ))}
        </ul>
      </div>
    );
  };
  

export default CurrencyList;
