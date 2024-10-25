import { database } from "./FirebaseSetup";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

export function subscribeToDatabase(collectionName, callback) {
  const q = query(collection(database, collectionName));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    // console.log("Received data from database:", items);
    callback(items);
  });
  return unsubscribe;
}

export async function writeToDatabase(collectionName, data) {
  try {
    await addDoc(collection(database, collectionName), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
