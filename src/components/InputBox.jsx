import React from "react";
import { useId } from "react";

function InputBox({
    //these are all props - args passed to component
    label,
    amount,
    onAmtChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amtDisable = false, //input for amt enable or disable
    currencyDisable = false,    //input for currency enable or disable
    className = "",
}) {
   
    const amtInpID = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>   
            {/* backticks allow us to embedd expressions, like ${className} */}
            <div className="w-1/2">
                <label htmlFor={amtInpID} className="text-black/40 mb-2 inline-block">
                    {/* htmlFor helps us associate label with a specific input element
                        ensures elem and its label have unique relationship */}
                    {label}
                </label>
                <input
                    id = {amtInpID}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amtDisable}
                    value={amount}
                    onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))}    //if onAmtChange is not null, then only call the fn
                    //Number() converts the i/p to a number
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled = {currencyDisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                        //For each currency (c), it creates an <option> element with a unique key attribute (set to the currency itself) 
                        //and a value attribute (also set to the currency). 
                        //The text content of the option is the currency name (c).
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;