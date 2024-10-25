import { createContext, useState } from "react";

export const Context = createContext();

export const CounterContext = ({ children }) => {
    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("count")) || 0)
    localStorage.getItem("count", JSON.stringify(counter))

    return <Context.Provider value={{counter, setCounter}}>{children}</Context.Provider>
    
}