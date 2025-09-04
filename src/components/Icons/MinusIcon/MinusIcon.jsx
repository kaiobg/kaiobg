import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo } from 'react';

const MinusIcon = (props) => {
  return(
    <FontAwesomeIcon
      icon={faMinus}
      {...props}
    />
  );
};

const MinusIconMemo = memo(MinusIcon);

export { MinusIconMemo as MinusIcon };
