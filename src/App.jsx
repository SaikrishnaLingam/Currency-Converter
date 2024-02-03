import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './customHook/useCurrencyInfo'

function App() {
  //State setup
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amountDisplayed, setAmountDisplayed] = useState(0)
  const [convert, setConvert] = useState(0)

  const currInfo = useCurrencyInfo(from)
  //currInfo has data of all conversions of the 'from' currency
    //I need to access key of this list to display specific curr I want
  const currencyKeys = Object.keys(currInfo)

  //Swap functionality
  const swapFn = () => {
    setFrom(to)
    setTo(from)
    setAmountDisplayed(convert)
    setConvert(amountDisplayed)
  }

  //Convert functionality
  const convertButton = () => {
    setConvert(amountDisplayed*currInfo[to])
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();     //prevents the default actions that browser does when a form is submitted
                            convertButton   ();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amountDisplayed}
                                currencyOptions={currencyKeys}
                                onCurrencyChange={(cur) => setFrom(cur)}
                                selectCurrency={from}
                                onAmtChange={(amtt) => setAmountDisplayed(amtt)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapFn}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convert}
                                currencyOptions={currencyKeys}
                                onCurrencyChange={(cur) => setTo(cur)}
                                selectCurrency={to}
                                amtDisable  
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
