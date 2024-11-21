import { database } from "./FirebaseSetup";
import {
  collection,
  addDoc,
  query,
  updateDoc,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";

// Function to subscribe to a specific Firestore collection and listen for real-time updates
export function subscribeToDatabase(collectionName, callback) {
  const q = query(collection(database, collectionName));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      // Add each document to the items array, including its ID and data
      items.push({ id: doc.id, ...doc.data() });
    });
    callback(items);
  });
  return unsubscribe;
}

// Function to add a new document to the specified Firestore collection
export async function writeToDatabase(collectionName, data) {
  try {
    await addDoc(collection(database, collectionName), data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Function to update an existing document in the specified Firestore collection
export async function editInDatabase(collectionName, id, data) {
  try {
    await updateDoc(doc(database, collectionName, id), data);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

// Function to delete a document from the specified Firestore collection
export async function deleteFromDatabase(collectionName, id) {
  try {
    await deleteDoc(doc(database, collectionName, id));
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}
