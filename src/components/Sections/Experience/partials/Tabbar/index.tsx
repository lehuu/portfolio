import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
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
  const horizontalTabIndicator = useRef<HTMLDivElement>(null);
  const verticalTabIndicator = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [isTabletBreakpoint, setIsTabletBreakpoint] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= breakpointSizes.tablet : 0
  );

  useLayoutEffect(() => {
    if (!tabContainerRef.current) return;

    const tabElements = Object.values(tabContainerRef.current?.children);

    const { width, height } = tabElements[selectedTab].getBoundingClientRect();

    const widthOffset = tabElements
      .slice(0, selectedTab)
      .reduce((prev, current) => prev + current.getBoundingClientRect().width, 0);

    const heightOffset = tabElements
      .slice(0, selectedTab)
      .reduce((prev, current) => prev + current.getBoundingClientRect().height, 0);

    if (horizontalTabIndicator.current) {
      horizontalTabIndicator.current.style.width = `${width}px`;
      horizontalTabIndicator.current.style.transform = `translateX(${widthOffset}px)`;
    }
    if (verticalTabIndicator.current) {
      verticalTabIndicator.current.style.height = `${height}px`;
      verticalTabIndicator.current.style.transform = `translateY(${heightOffset}px)`;
    }
  }, [selectedTab, isTabletBreakpoint]);

  useLayoutEffect(() => {
    if (!tabContainerRef.current || isTabletBreakpoint) return;
    const tabElements = Object.values(tabContainerRef.current.children);
    const widthOffset = tabElements
      .slice(0, selectedTab)
      .reduce((prev, current) => prev + current.clientWidth, 0);

    tabContainerRef.current.scroll({
      top: 0,
      left: widthOffset,
      behavior: 'auto',
    });
  }, [isTabletBreakpoint]);

  const handleScroll = () => {
    if (!tabContainerRef.current) return;
    setCanScrollLeft(tabContainerRef.current?.scrollLeft > 0);
    const { scrollWidth, clientWidth, scrollLeft } = tabContainerRef.current;
    setCanScrollRight(scrollWidth - clientWidth !== scrollLeft);
  };

  const checkOverflowWidths = () => {
    if (!tabContainerRef.current) return;
    setHasOverflow(tabContainerRef.current.offsetWidth < tabContainerRef.current.scrollWidth);
    handleScroll();
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

  const handleScrollClick = (factor: -1 | 1) => {
    if (!tabContainerRef.current) return;
    tabContainerRef.current.scrollTo({
      top: 0,
      left: tabContainerRef.current.scrollLeft + factor * tabContainerRef.current.clientWidth * 0.6,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.Container hasOverflow={hasOverflow}>
      {hasOverflow && (
        <Styled.ScrollButton
          alignment="start"
          type="button"
          onClick={() => handleScrollClick(-1)}
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
          <Styled.TabletActiveTabIndicator ref={verticalTabIndicator} />
        ) : (
          <Styled.MobileActiveTabIndicator ref={horizontalTabIndicator} hasOverflow={hasOverflow} />
        )}
      </Styled.TabContainer>
      {hasOverflow && (
        <Styled.ScrollButton
          alignment="end"
          type="button"
          onClick={() => handleScrollClick(1)}
          disabled={!canScrollRight}
        >
          <RightArrow />
        </Styled.ScrollButton>
      )}
    </Styled.Container>
  );
};

export default Tabbar;
