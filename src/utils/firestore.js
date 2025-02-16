import { db } from "@/config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const TASKS_COLLECTION = "tasks";

export const addTaskToFirestore = async (task, userId) => {
  try {
    const docRef = await addDoc(collection(db, TASKS_COLLECTION), {
      ...task,
      userId,
    });
    return { id: docRef.id, ...task };
  } catch (error) {
    console.error("Error adding task: ", error);
    throw error;
  }
};

export const getTasksFromFirestore = async (userId) => {
  try {
    const q = query(
      collection(db, TASKS_COLLECTION),
    //   where("userId", "==", userId), //* Comment this to see all tasks without userId
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting tasks: ", error);
    throw error;
  }
};

export const deleteTaskFromFirestore = async (taskId) => {
  try {
    await deleteDoc(doc(db, TASKS_COLLECTION, taskId));
  } catch (error) {
    console.error("Error deleting task: ", error);
    throw error;
  }
};
