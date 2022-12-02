import { createContext, useState, useReducer } from "react";

export const DarkModeContext = createContext();

const reducerFunction = (state, { type }) => {
  switch (type) {
    case "DARK":
      return {
        bgFlag: "LIGHT",
        bgColor: "#393944",
        ftColor: "#eee"
      }
    case "LIGHT":
      return {
        bgFlag: "DARK",
        ftColor: "#393944",
        bgColor: "#eee"
      }
    default:
      return state;
  }
}

const DarkModeProvider = ({ children }) => {
  const initalState = { bgFlag: "DARK", ftColor: "#393944", bgColor: "#eee" }
  //SE TIENE QUE LLAMAR ASÍ
  const [state, dispatch] = useReducer(reducerFunction, initalState);

  const store = {
    state,
    dispatch,
  };

  return (
    <DarkModeContext.Provider value={store}>
      <div style={{ backgroundColor: `${state.bgColor}`, width: "100%", height: "100vh", minHeight: "100%", color: `${state.ftColor}` }}>
        {children}
      </div>
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider;