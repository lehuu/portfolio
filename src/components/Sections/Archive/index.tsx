import React, { useState } from 'react';
import Styled from './style';

const Archive: React.FunctionComponent = () => {
  const [isTableShown, setIsTableShown] = useState(false);

  const handleShowButton = () => {
    setIsTableShown((curr) => !curr);
  };

  return (
    <Styled.Container>
      <Styled.OpenArchiveButton onClick={handleShowButton}>
        {isTableShown ? 'Hide' : 'Show'} All Projects
      </Styled.OpenArchiveButton>
      {isTableShown && <div>Table</div>}
    </Styled.Container>
  );
};

export default Archive;
