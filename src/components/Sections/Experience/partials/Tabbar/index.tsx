import React, { useRef, useEffect, useState, useMemo } from 'react';
import LeftArrow from '@icons/arrow-left.svg';
import RightArrow from '@icons/arrow-right.svg';
import { useWindowResize } from '@hooks';
import { breakpointSizes } from '@styles';
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
  const [isTabletBreakpoint, setIsTabletBreakpoint] = useState(
    window.innerWidth >= breakpointSizes.tablet
  );

  const { indicatorWidth, indicatorWidthOffset, indicatorHeightOffset, indicatorHeight } =
    useMemo(() => {
      const width = tabContainerRef.current?.children[selectedTab].clientWidth || 0;

      const widthOffset = Object.values(tabContainerRef.current?.children || {})
        .slice(0, selectedTab)
        .reduce((prev, current) => prev + current.clientWidth, 0);

      const height = tabContainerRef.current?.children[selectedTab].clientHeight || 0;

      const heightOffset = Object.values(tabContainerRef.current?.children || {})
        .slice(0, selectedTab)
        .reduce((prev, current) => prev + current.clientHeight, 0);

      return {
        indicatorWidth: width,
        indicatorWidthOffset: widthOffset,
        indicatorHeightOffset: heightOffset,
        indicatorHeight: height,
      };
    }, [selectedTab, isTabletBreakpoint]);

  const handleScroll = () => {
    if (!tabContainerRef.current) return;
    setCanScrollLeft(tabContainerRef.current?.scrollLeft > 0);
    const { scrollWidth, clientWidth, scrollLeft } = tabContainerRef.current;
    setCanScrollRight(scrollWidth - clientWidth !== scrollLeft);
  };

  const checkOverflowWidths = () => {
    if (!tabContainerRef.current) return;
    setHasOverflow(tabContainerRef.current.offsetWidth < tabContainerRef.current.scrollWidth);
  };

  useEffect(() => {
    if (hasOverflow) handleScroll();
  }, [hasOverflow]);

  useWindowResize(() => {
    checkOverflowWidths();
    setIsTabletBreakpoint(window.innerWidth >= breakpointSizes.tablet);
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
        {isTabletBreakpoint ? (
          <Styled.TabletActiveTabIndicator
            height={indicatorHeight}
            heightOffset={indicatorHeightOffset}
          />
        ) : (
          <Styled.MobileActiveTabIndicator
            width={indicatorWidth}
            widthOffset={indicatorWidthOffset}
            hasOverflow={hasOverflow}
          />
        )}
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
