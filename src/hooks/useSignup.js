import { auth } from "../firebase/config.js";
import { useState } from "react";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

      console.log(response.user);

      if (!response) {
        throw new Error('Couldnt create an account');
      }

      // add display name to user
      await response.user.updateProfile({ displayName });

      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
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
