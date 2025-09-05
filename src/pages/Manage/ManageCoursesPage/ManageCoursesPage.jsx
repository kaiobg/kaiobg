import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Button, ButtonConstants, GrowlFns, PlusIcon, CourseList } from '@/components';
import { CourseSlice } from '@/store/slices';
import { utils } from '@/utils';

import styles from './ManageCoursesPage.module.scss';

const ManageCoursesPage = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const courses = useSelector(CourseSlice.selectors.selectAllCourses);
  const loadCoursesError = useSelector(CourseSlice.selectors.selectLoadCoursesError);
  const addCourseError = useSelector(CourseSlice.selectors.selectAddCourseError);
  const saveCourseError = useSelector(CourseSlice.selectors.selectSaveCourseError);
  const saveCourseMessage = useSelector(CourseSlice.selectors.selectSaveCourseMessage);

  const onAddItem = useCallback(() => {
    const now = utils.getDateIsoFormat(new Date());

    dispatch(CourseSlice.actions.addCourse({
      title: {},
      content: {},
      isPublished: false,
      createdAt: now,
    }));
  }, [ dispatch ]);

  const onCloseLoadCoursesErrorGrowl = useCallback(() => {
    dispatch(CourseSlice.actions.clearLoadCoursesError());
  }, [ dispatch ]);
  
  const onCloseAddCourseErrorGrowl = useCallback(() => {
    dispatch(CourseSlice.actions.clearAddCourseError());
  }, [ dispatch ]);
  
  const onCloseSaveCourseErrorGrowl = useCallback(() => {
    dispatch(CourseSlice.actions.clearSaveCourseError());
  }, [ dispatch ]);

  const onCloseSaveCourseMessageGrowl = useCallback(() => {
    dispatch(CourseSlice.actions.clearSaveCourseMessage());
  }, [ dispatch ]);

  useEffect(() => {
    dispatch(CourseSlice.actions.loadCourses());
  }, [ dispatch ]);

  return (
    <div className={styles.ManageCoursesPage}>
      <h1>{t('Manage Courses')}</h1>

      <Button
        category={ButtonConstants.ButtonCategories.SUCCESS}
        icon={<PlusIcon />}
        onClick={onAddItem}
      >
        {t('Add Course')}
      </Button>

      {courses ? (
        <CourseList
          items={courses}
        />
      ) : <></>}

      {GrowlFns.renderSuccessGrowl({
        message: saveCourseMessage,
        onCloseGrowl: onCloseSaveCourseMessageGrowl,
      })}

      {GrowlFns.renderErrorGrowl({
        message: loadCoursesError,
        onCloseGrowl: onCloseLoadCoursesErrorGrowl,
      })}
      
      {GrowlFns.renderErrorGrowl({
        message: addCourseError,
        onCloseGrowl: onCloseAddCourseErrorGrowl,
      })}
      
      {GrowlFns.renderErrorGrowl({
        message: saveCourseError,
        onCloseGrowl: onCloseSaveCourseErrorGrowl,
      })}
    </div>
  );
};

const ManageCoursesPageMemo = memo(ManageCoursesPage);

export { ManageCoursesPageMemo as ManageCoursesPage };
