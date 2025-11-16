import { createContext } from "react";
import { branches }from '../assets/assets'

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext()

const AppContextProvider = (props) => {
   
    const value = {
        branches
    }

    return(
        <AppContext.Provider value={value}>
            {props.childen}
        </AppContext.Provider>
    )
}

export default AppContextProvider