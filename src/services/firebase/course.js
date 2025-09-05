import { getFirestore, collection, getDocs, addDoc, getDoc, doc, setDoc, deleteDoc, orderBy, query, where } from 'firebase/firestore';

import { DB_KEYS } from './db-keys';
import { app } from './firebase-app';

const db = getFirestore(app);

export const addCourse = async (data) => {
  const coursesRef = collection(db, DB_KEYS.COURSES);
  const docRef = await addDoc(coursesRef, data);
  const docSnap = await getDoc(docRef);

  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
};

export const loadCourses = async () => {
  const coursesRef = collection(db, DB_KEYS.COURSES);
  const q = query(coursesRef, orderBy('createdAt', 'desc'));
  const coursesSnapshot = await getDocs(q);

  return coursesSnapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
};

export const loadPublishedCourses = async () => {
  const coursesRef = collection(db, DB_KEYS.COURSES);
  const q = query(
    coursesRef,
    where('isPublished', '==', true),
    orderBy('createdAt', 'desc'),
  );
  const coursesSnapshot = await getDocs(q);

  return coursesSnapshot.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
};

export const removeCourse = async (id) => {
  const courseRef = doc(db, DB_KEYS.COURSES, id);

  await deleteDoc(courseRef);

  return { id };
};

export const saveCourse = async (data) => {
  const { id, ...otherData } = data;

  const courseRef = doc(db, DB_KEYS.COURSES, id);

  await setDoc(courseRef, otherData);

  return data;
};
