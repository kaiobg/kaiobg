import { memo } from 'react';

import { CourseItem } from './CourseItem';

import styles from './CourseList.module.scss';

const CourseList = (props) => {
  const { items } = props;

  return (
    <div className={styles.CourseList}>
      {items.map((item) => (
        <CourseItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

const CourseListMemo = memo(CourseList);

export { CourseListMemo as CourseList };
