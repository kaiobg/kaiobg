import { memo, useCallback } from 'react';

import { Input, WorkoutConstants } from '@/components';
import { EXERCISE_DETAIL_SPECIAL_PROPERTIES } from '@/constants';

import styles from './ExerciseDetail.module.scss';

const ExerciseDetail = (props) => {
  const { property, text, value, mode } = props;
  const { setExerciseProperty } = props;

  const renderValue = useCallback(() => {
    if(mode != WorkoutConstants.WORKOUT_MODES.EDIT) {
      if(property == EXERCISE_DETAIL_SPECIAL_PROPERTIES.LINK) {
        return <a className={styles.ExerciseValue} href={value} target="_blank">{value}</a>;
      }

      return <span className={styles.ExerciseValue}>{value}</span>;
    }

    return (
      <Input
        type="text"
        name={property}
        value={value}
        onChange={(event) => setExerciseProperty(property, event.target.value)}
      />
    );
  }, [ property, mode, setExerciseProperty, value ]);

  return (
    <div className={styles.ExerciseDetail}>
      <span className={styles.ExerciseText}>{text}</span>
      {renderValue()}
    </div>
  );
};

const ExerciseDetailMemo = memo(ExerciseDetail);

export { ExerciseDetailMemo as ExerciseDetail };
