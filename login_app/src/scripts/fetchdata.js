const fetchCurrencies = async () => {
    try {
        const response = await fetch("https://api.coinbase.com/v2/currencies");
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
  };
  
  export default fetchCurrencies;
  