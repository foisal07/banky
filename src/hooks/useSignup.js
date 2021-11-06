import { auth } from "../firebase/config.js";
import { useState } from "react";
import {useAuthContext} from './useAuthContext'

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {dispatch} = useAuthContext()


  const signup = async (email, password, displayName) => {
    // remove previous error
    setError(null);
    setIsLoading(true);

    try {
      // signup
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!response) {
        throw new Error("Couldnt create an account");
      }

      // add display name to user
      await response.user.updateProfile({ displayName });

      // dispatch action to login the user
      dispatch({type:'LOGIN', payload: response.user})

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
    signup,
  };
};

export default useSignup;
