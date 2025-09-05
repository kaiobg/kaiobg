import * as auth from './auth';
import * as checkIn from './check-in';
import * as course from './course';
import * as exercise from './exercise';
import * as publication from './publication';
import * as user from './user';

export const firebaseService = {
  auth,
  user,
  exercise,
  checkIn,
  course,
  publication,
};
