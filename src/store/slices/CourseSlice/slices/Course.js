import { createAsyncThunk } from '@reduxjs/toolkit';

import { REQUEST_STATUS } from '@/constants';
import i18n from '@/i18n';
import { coursesService } from '@/services';

import { COURSE_SLICE_NAME } from '../constants';

const { t } = i18n;

// Initial State
const initialState = {
  courses: [],
  loadCoursesStatus: REQUEST_STATUS.IDLE,
  loadCoursesError: null,

  addCourseStatus: REQUEST_STATUS.IDLE,
  addCourseError: null,

  saveCourseStatus: REQUEST_STATUS.IDLE,
  saveCourseError: null,
  saveCourseMessage: null,

  removeCourseStatus: REQUEST_STATUS.IDLE,
  removeCourseError: null,
};

// Reducers
const reducers = {
  clearLoadCoursesError: (state) => {
    state.loadCoursesError = null;
  },
  clearAddCourseError: (state) => {
    state.addCourseError = null;
  },
  clearSaveCourseError: (state) => {
    state.saveCourseError = null;
  },
  setSaveCourseError: (state, action) => {
    state.saveCourseError = action.payload;
  },
  clearSaveCourseMessage: (state) => {
    state.saveCourseMessage = null;
  },
};

// Async Thunk
const asyncThunk = {
  loadCourses: createAsyncThunk(`${COURSE_SLICE_NAME}/loadCourses`, async () => await coursesService.loadCourses()),
  loadPublishedCourses: createAsyncThunk(`${COURSE_SLICE_NAME}/loadPublishedCourses`, async () => await coursesService.loadPublishedCourses()),
  addCourse: createAsyncThunk(`${COURSE_SLICE_NAME}/addCourse`, async (data) => await coursesService.addCourse(data)),
  saveCourse: createAsyncThunk(`${COURSE_SLICE_NAME}/saveCourse`, async (data) => await coursesService.saveCourse(data)),
  removeCourse: createAsyncThunk(`${COURSE_SLICE_NAME}/removeCourse`, async (id) => await coursesService.removeCourse(id)),
};

// Extra Reducers
const extraReducers = (builder) => {
  builder
    .addCase(asyncThunk.loadCourses.pending, (state) => {
      state.loadCoursesStatus = REQUEST_STATUS.LOADING;
    })
    .addCase(asyncThunk.loadCourses.fulfilled, (state, action) => {
      state.loadCoursesStatus = REQUEST_STATUS.SUCCEEDED;
      state.courses = action.payload;
    })
    .addCase(asyncThunk.loadCourses.rejected, (state, action) => {
      state.loadCoursesStatus = REQUEST_STATUS.FAILED;
      state.loadCoursesError = t(`error-message.load-courses.${action.error.code}`);
    });

  builder
    .addCase(asyncThunk.loadPublishedCourses.pending, (state) => {
      state.loadCoursesStatus = REQUEST_STATUS.LOADING;
    })
    .addCase(asyncThunk.loadPublishedCourses.fulfilled, (state, action) => {
      state.loadCoursesStatus = REQUEST_STATUS.SUCCEEDED;
      state.courses = action.payload;
    })
    .addCase(asyncThunk.loadPublishedCourses.rejected, (state, action) => {
      state.loadCoursesStatus = REQUEST_STATUS.FAILED;
      state.loadCoursesError = t(`error-message.load-courses.${action.error.code}`);
      console.error(action.error);
    });

  builder
    .addCase(asyncThunk.addCourse.pending, (state) => {
      state.addCourseStatus = REQUEST_STATUS.LOADING;
    })
    .addCase(asyncThunk.addCourse.fulfilled, (state, action) => {
      state.addCourseStatus = REQUEST_STATUS.SUCCEEDED;
      state.courses.unshift(action.payload);
    })
    .addCase(asyncThunk.addCourse.rejected, (state, action) => {
      state.addCourseStatus = REQUEST_STATUS.FAILED;
      state.addCourseError = t(`error-message.add-course.${action.error.code}`);
    });

  builder
    .addCase(asyncThunk.saveCourse.pending, (state) => {
      state.saveCourseStatus = REQUEST_STATUS.LOADING;
    })
    .addCase(asyncThunk.saveCourse.fulfilled, (state, action) => {
      state.saveCourseStatus = REQUEST_STATUS.SUCCEEDED;

      const updatedCourse = action.payload;
      const existingCourseIndex = state.courses.findIndex(course => course.id == updatedCourse.id);

      state.courses[existingCourseIndex] = { ...updatedCourse };

      state.saveCourseMessage = t('Saved');
    })
    .addCase(asyncThunk.saveCourse.rejected, (state, action) => {
      state.saveCourseStatus = REQUEST_STATUS.FAILED;
      state.saveCourseError = t(`error-message.save-course.${action.error.code}`);
    });

  builder
    .addCase(asyncThunk.removeCourse.pending, (state) => {
      state.removeCourseStatus = REQUEST_STATUS.LOADING;
    })
    .addCase(asyncThunk.removeCourse.fulfilled, (state, action) => {
      state.removeCourseStatus = REQUEST_STATUS.SUCCEEDED;

      const courseIndex = state.courses.findIndex(course => course.id == action.payload.id);
      state.courses.splice(courseIndex, 1);
    })
    .addCase(asyncThunk.removeCourse.rejected, (state, action) => {
      state.removeCourseStatus = REQUEST_STATUS.FAILED;
      state.removeCourseError = t(`error-message.remove-course.${action.error.code}`);
    });
};

// Selectors
const selectors = {
  selectAllCourses: (state) => {
    return state.courses.courses;
  },
  selectCourseById: (courseId) => (state) => {
    return state.courses.courses.find(course => course.id === courseId);
  },
  selectLoadCoursesError: (state) => {
    return state.courses.loadCoursesError;
  },
  selectLoadCoursesStatus: (state) => {
    return state.courses.loadCoursesStatus;
  },
  selectAddCourseError: (state) => {
    return state.courses.addCourseError;
  },
  selectSaveCourseError: (state) => {
    return state.courses.saveCourseError;
  },
  selectRemoveCourseError: (state) => {
    return state.courses.removeCourseError;
  },
  selectSaveCourseMessage: (state) => {
    return state.courses.saveCourseMessage;
  },
};

export const Course = {
  initialState,
  reducers,
  asyncThunk,
  extraReducers,
  selectors,
};
