import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";
import { useRef } from "react";

export default function useCollections(collection, _query) {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  // if we don't use a ref --> infinite loop in useEffect 
  // _query is an array which is a reference value and will be "different" on every function call
  const query = useRef(_query).current;

  useEffect(() => {
    let collectionRef = firestore.collection(collection);

    if (query) {
      collectionRef = collectionRef.where(...query);
    }

    const unsubscribe = collectionRef.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch data");
      }
    );

    return () => unsubscribe();
  }, [collection, query]);

  return { documents, error };
}
