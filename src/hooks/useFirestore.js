import React, { useState } from "react";
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
  const [isCancelled, setIsCancelled] = useState(null);

  // create collection ref
  const collectionRef = firestore.collection(collectionName);

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a collection to firestore
  const addDocument = async (doc) => {
    dispatch({ type: "IS_LOADING" });

    try {
      const addedDocument = await collectionRef.add({ ...doc });
      dispatchIfNotCancelled({ type: "ADD_DOCUMENT", payload: doc });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // delete a collection from firestore
  const deleteDocument = () => {};

  return { addDocument, deleteDocument, response };
}
