import { memo } from 'react';

import { EyeIcon, EyeSlashIcon } from '@/components/Icons';

const CourseItemStatus = (props) => {
  const { item } = props;

  return item.isPublished ? <EyeIcon /> : <EyeSlashIcon />;
};

const CourseItemStatusMemo = memo(CourseItemStatus);

export { CourseItemStatusMemo as CourseItemStatus };
