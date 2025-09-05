import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ExpandCollapseArrow } from '@/components/ExpandCollapseArrow';
import { FieldWithLabel, Input } from '@/components/Forms';

import { CourseItemStatus } from '../CourseItemStatus';

import styles from './CourseItemHeader.module.scss';

const CourseItemHeader = (props) => {
  const { item, isExpanded, editMode, selectedLanguage } = props;
  const { onChangeExpandedState, onUpdateItemProperty } = props;

  const { t } = useTranslation();

  const onUpdateTitle = useCallback((event) => {
    const updatedTitle = {
      ...item.title,
      [selectedLanguage]: event.target.value,
    };
    onUpdateItemProperty('title', updatedTitle);
  }, [ item.title, onUpdateItemProperty, selectedLanguage ]);

  const renderTitle = useCallback(() => {
    if(!editMode) {
      return item.title[selectedLanguage] || t('<empty>');
    }

    return (
      <FieldWithLabel
        label={t('Title')}
        field={(
          <Input
            type="text"
            name="title"
            value={item.title[selectedLanguage]}
            onChange={(event) => onUpdateTitle(event)}
          />
        )}
      />
    );
  }, [ editMode, item.title, onUpdateTitle, selectedLanguage, t ]);

  return (
    <div className={styles.CourseItemHeader} onClick={editMode ? () => null : onChangeExpandedState}>
      <h2>
        <CourseItemStatus item={item} />
        {renderTitle()}
      </h2>
      
      <ExpandCollapseArrow
        isExpanded={isExpanded}
      />
    </div>
  );
};

const CourseItemHeaderMemo = memo(CourseItemHeader);

export { CourseItemHeaderMemo as CourseItemHeader };
