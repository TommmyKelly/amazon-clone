import React, { createContext, useContext, useReducer } from "react";

// Prepare the dataLayer
export const StateContext = createContext();


//wrap our app and provide the data layer to the app
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//pull info from the data layer
export const useStateValue = () => useContext(StateContext);