import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { GrowlFns, CourseCard } from '@/components';
import { CourseSlice } from '@/store/slices';

import styles from './CoursesPage.module.scss';

const CoursesPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const courses = useSelector(CourseSlice.selectors.selectAllCourses);
  const loadCoursesError = useSelector(CourseSlice.selectors.selectLoadCoursesError);

  const onCloseLoadCoursesErrorGrowl = useCallback(() => {
    dispatch(CourseSlice.actions.clearLoadCoursesError());
  }, [ dispatch ]);

  useEffect(() => {
    dispatch(CourseSlice.actions.loadPublishedCourses());
  }, [ dispatch ]);

  return (
    <div className={styles.CoursesPage}>
      <h2 className={styles.header}>{t('Courses')}</h2>
      <div className={styles.coursesGrid}>
        {
          !courses?.length ? (
            <span>{t('No courses found')}</span>
          ) : <></>
        }

        {courses.map((course) => {
          return (
            <CourseCard key={course.id} course={course} />
          );
        })}
      </div>

      {GrowlFns.renderErrorGrowl({
        message: loadCoursesError,
        onCloseGrowl: onCloseLoadCoursesErrorGrowl,
      })}
    </div>
  );
};

const CoursesPageMemo = memo(CoursesPage);

export { CoursesPageMemo as CoursesPage };
