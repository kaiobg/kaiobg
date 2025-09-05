import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';

const GraduationCapIcon = (props) => {
  return (
    <FontAwesomeIcon
      icon={faGraduationCap}
      {...props}
    />
  );
};

const GraduationCapIconMemo = memo(GraduationCapIcon);

export { GraduationCapIconMemo as GraduationCapIcon };
