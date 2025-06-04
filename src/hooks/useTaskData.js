import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function useTaskData(user) {
  const [taskLists, setTaskLists] = useState([]);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setTaskLists(snap.data().taskLists || []);
      }
    };
    fetchData();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const saveData = async () => {
      const ref = doc(db, "users", user.uid);
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        await updateDoc(ref, { taskLists });
      } else {
        await setDoc(ref, { taskLists });
      }
    };
    saveData();
  }, [taskLists, user]);

  return [taskLists, setTaskLists];
}
