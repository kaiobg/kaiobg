import { buildSlice } from '@/store/slices/functions';

import { COURSE_SLICE_NAME } from './constants';
import * as sliceParts from './slices';

export const CourseSlice = buildSlice({
  sliceName: COURSE_SLICE_NAME,
  sliceParts,
});

