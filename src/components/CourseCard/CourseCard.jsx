import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { Button, ButtonConstants } from '@/components';
import { utils } from '@/utils';

import styles from './CourseCard.module.scss';

const CourseCard = (props) => {
  const { course } = props;
  const { t } = useTranslation();

  const content = utils.getContentByUserLanguages(course);
  const title = utils.getTitleByUserLanguages(course);

  return (
    <div className={styles.CourseCard}>
      <h2>{title}</h2>

      <div
        className={styles.CourseCardContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <Link to={{ pathname: '/course', search: `?id=${course.id}` }}>
        <Button className={styles.btnReadMore} category={ButtonConstants.ButtonCategories.PRIMARY}>
          {t('Read more')}
        </Button>
      </Link>
    </div>
  );
};

const CourseCardMemo = memo(CourseCard);

export { CourseCardMemo as CourseCard };
