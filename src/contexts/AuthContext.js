import React from "react";
import { createContext } from "react";
import { useReducer } from "react";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return { ...state, user: action.payload };
  }

  return state;
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log(state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
