import React, { useRef, useEffect, useState } from 'react';
import LeftArrow from '@icons/arrow-left.svg';
import RightArrow from '@icons/arrow-right.svg';
import { useWindowResize } from '@hooks';
import Styled from './style';

interface TabbarProps {
  tabs: string[];
  selectedTab?: number;
  onChange: (newTab: number) => void;
}

const Tabbar: React.FunctionComponent<TabbarProps> = ({ tabs, selectedTab = 0, onChange }) => {
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);

  const handleScroll = () => {
    if (!tabContainerRef.current) return;
    setCanScrollLeft(tabContainerRef.current?.scrollLeft > 0);
    const { scrollWidth, clientWidth, scrollLeft } = tabContainerRef.current;
    setCanScrollRight(scrollWidth - clientWidth !== scrollLeft);
  };

  const checkOverflowWidths = () => {
    if (!tabContainerRef.current) return;
    if (tabContainerRef.current.offsetWidth < tabContainerRef.current.scrollWidth) {
      setHasOverflow(true);
    } else {
      setHasOverflow(false);
    }
  };

  useEffect(() => {
    checkOverflowWidths();
  }, []);

  useEffect(() => {
    if (hasOverflow) handleScroll();
  }, [hasOverflow]);

  useWindowResize(() => {
    checkOverflowWidths();
  });

  const handleTabClick = (clickedButton: number) => {
    onChange(clickedButton);
  };

  const handlePreviousClick = () => {
    if (!tabContainerRef.current) return;
    tabContainerRef.current.scrollTo({
      top: 0,
      left: tabContainerRef.current.scrollLeft - 200,
      behavior: 'smooth',
    });
  };
  const handleNextClick = () => {
    if (!tabContainerRef.current) return;
    tabContainerRef.current.scrollTo({
      top: 0,
      left: tabContainerRef.current.scrollLeft + 200,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.Container hasOverflow={hasOverflow}>
      {hasOverflow && (
        <Styled.ScrollButton
          alignment="start"
          type="button"
          onClick={handlePreviousClick}
          disabled={!canScrollLeft}
        >
          <LeftArrow />
        </Styled.ScrollButton>
      )}
      <Styled.TabContainer
        ref={tabContainerRef}
        role="tablist"
        onScroll={handleScroll}
        hasOverflow={hasOverflow}
      >
        {tabs.map((tab, index) => (
          <Styled.Tab
            type="button"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => {
              handleTabClick(index);
            }}
            isSelected={selectedTab === index}
          >
            {tab}
          </Styled.Tab>
        ))}
      </Styled.TabContainer>
      {hasOverflow && (
        <Styled.ScrollButton
          alignment="end"
          type="button"
          onClick={handleNextClick}
          disabled={!canScrollRight}
        >
          <RightArrow />
        </Styled.ScrollButton>
      )}
    </Styled.Container>
  );
};

export default Tabbar;
