import React, { useState, useEffect } from "react";
// import CurrencyInput from "react-currency-input-field";

export const EurCalc = ({ amount }) => {
    const [rates, setRates] = useState();
    const [ratesFetched, setRatesFetched] = useState(false);
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("HUF");
    const [output, setOutput] = useState();

    const getRates = async () => {
        // fetch the data from API
        const response = await fetch(
            "https://v6.exchangerate-api.com/v6/5f96a3dbbd4cccb1f9f337a6/latest/USD"
        ).then((response) => response.json());

        // save the rates in the state
        if (response.result === "success") {
            setRates(response.conversion_rates);
            setRatesFetched(true);
        }
    };

    useEffect(() => {
        getRates();
    }, []);

    const calculateOutput = async () => {
        // fetch the selected from currency rates
        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/5f96a3dbbd4cccb1f9f337a6/latest/${fromCurrency}`
        ).then((response) => response.json());
        const fetchedRates = response.conversion_rates;
        const CurrencyRate = fetchedRates[toCurrency];
        const output = amount * CurrencyRate;
        setOutput(output);
    };

    useEffect(() => {
        calculateOutput();
    }, []);

    return (
        { output }
    );
}

export default EurCalc;

{/* <div className="container">
    <div className="input-amount">
        <label>Amount:</label>
        <input
            type="number"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
        />
         <CurrencyInput
          value={amount}
          onValueChange={(amount) => setAmount(amount)}
          intlConfig={{ locale: "en-US", currency: fromCurrency }}
          allowDecimals={true}
          allowNegativeValue={false}
        />
    </div>

    <div className="input-from">
        <label>From:</label>
        <select
            id="from"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
        >
            {ratesFetched ? (
                Object.keys(rates).map((currency, index) => (
                    <option key={index} value={currency}>
                        {currency}
                    </option>
                ))
            ) : (
                <option defaultValue>USD</option>
            )}
        </select>
    </div>

    <div className="input-to">
        <label>To:</label>
        <select
            id="to"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
        >
            {ratesFetched ? (
                Object.keys(rates).map((currency, index) => (
                    <option key={index} value={currency}>
                        {currency}
                    </option>
                ))
            ) : (
                <option defaultValue>EUR</option>
            )}
        </select>
    </div>
    <button className="btn" onClick={() => calculateOutput()}>
        Calculate
    </button>
    <div className="output">
        <label>Output: {output}</label>
    </div>
</div> */}