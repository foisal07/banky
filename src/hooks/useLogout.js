import { auth } from "../firebase/config.js";
import { useState } from "react";
import {useAuthContext} from './useAuthContext'

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {dispatch} = useAuthContext()


 const logout = async () => {
    // remove previous error
    setError(null);
    setIsLoading(true);

    try {
      // Logout
      const response = await auth.signOut

      if (!response) {
        throw new Error("Something went wrong!");
      }

      // dispatch action to update logout local state 
      dispatch({type:'LOGOUT'})

      setIsLoading(false);
      setError(null);
    } catch (err) {
    console.log(err.message);
      setError(err.message);
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    logout,
  };
};

export default useLogout;
