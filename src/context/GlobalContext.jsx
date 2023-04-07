import React, { createContext, useEffect, useReducer } from "react";
import { dentistGet } from "../services/serviceDentist";

export const GlobalContext = createContext();

const initialState = {
  users: [],
  theme: "light",
  data: null,
  favs: [],
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "THEME":
      return { ...state, theme: state.theme === 'light' ? 'dark':'light'};
    case "DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
 
 const theme=()=>{
    dispatch({type:'THEME'});
 };

 const data =()=>{
    dispatch({type:'DATA',payload:data});
 }
 
 
  useEffect(() => {
    const dentistsApi = dentistGet();
    dentistsApi.then((res) =>
      dispatch({ type: "GET_USERS", payload: res.data })
    );
  }, []);
  console.log(state.users);
  return (
    <GlobalContext.Provider value={{ state, dispatch, theme,data }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
