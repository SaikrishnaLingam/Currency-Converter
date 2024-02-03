import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})    //empty obj as default value
    //data will store currency info that is fetched
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())  //converting response to json format; need to hold this data somewhere
        .then((res) => setData(res[currency]))    //need to hold this data in useState so that it can be updated
            //we can access the obj with dot also instead of res[currency]
            //currency is the key of the data we r interested in

            //setData updates data variable with currency info
    }, [currency])
    return data //this way, component using our custom hook can access the data and render it
}

export default useCurrencyInfo