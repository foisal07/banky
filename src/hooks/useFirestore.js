import React from "react";
import { useReducer } from "react";
import { firestore } from "../firebase/config";

const initialState = {
  document: null,
  isLoading: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  if (action.type === "IS_LOADING") {
    return { document: null, isLoading: true, error: null, success: null };
  }

  if (action.type === "ERROR") {
    return {
      document: null,
      isLoading: false,
      error: action.payload,
      success: null,
    };
  }

  if (action.type === "ADD_DOCUMENT") {
    return {
      document: action.payload,
      isLoading: true,
      error: action.payload,
      success: true,
    };
  }

  return state;
};

export default function useFirestore(collectionName) {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);

  // create collection ref
  const collectionRef = firestore.collection(collectionName);

  // add a collection to firestore
  const addDocument = async (doc) => {
    dispatch({ type: "IS_LOADING" });

    try {
      const addedDocument = await collectionRef.add({ ...doc });
      dispatch({ type: "ADD_DOCUMENT", payload: doc });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  // delete a collection from firestore
  const deleteDocument = () => {};

  return { addDocument, deleteDocument, response };
}
