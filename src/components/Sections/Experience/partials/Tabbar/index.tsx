import React from 'react';
import LeftArrow from '@icons/arrow-left.svg';
import RightArrow from '@icons/arrow-right.svg';
import Styled from './style';

interface TabbarProps {
  tabs: string[];
  selectedTab?: number;
  onChange: (newTab: number) => void;
}

const Tabbar: React.FunctionComponent<TabbarProps> = ({ tabs, selectedTab = 0, onChange }) => {
  const handleClick = (clickedButton: number) => {
    onChange(clickedButton);
  };

  return (
    <Styled.Container>
      <Styled.ScrollButton alignment="start" type="button">
        <LeftArrow />
      </Styled.ScrollButton>
      <Styled.TabContainer role="tablist">
        {tabs.map((tab, index) => (
          <Styled.Tab
            type="button"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            isSelected={selectedTab === index}
          >
            {tab}
          </Styled.Tab>
        ))}
      </Styled.TabContainer>
      <Styled.ScrollButton alignment="end" type="button">
        <RightArrow />
      </Styled.ScrollButton>
    </Styled.Container>
  );
};

export default Tabbar;
