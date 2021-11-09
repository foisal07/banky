import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";

export default function useCollections(collection) {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let collectionRef = firestore.collection(collection);

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
  }, [collection]);

  return { documents, error };
}
