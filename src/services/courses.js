import { firebaseService } from './firebase';

export const addCourse = async (data) => {
  return await firebaseService.course.addCourse(data);
};

export const loadCourses = async () => {
  return await firebaseService.course.loadCourses();
};

export const loadPublishedCourses = async () => {
  return await firebaseService.course.loadPublishedCourses();
};

export const removeCourse = async (id) => {
  return await firebaseService.course.removeCourse(id);
};

export const saveCourse = async (data) => {
  return await firebaseService.course.saveCourse(data);
};
