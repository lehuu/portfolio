import React from 'react';
import Styled from './style';

interface TabContentProps {
  title: string;
  company: string;
  url: string;
  startDate: Date;
  endDate: Date | 'now';
  tasksHTML: string;
}

const TabContent: React.FunctionComponent<TabContentProps> = ({
  title,
  company,
  url,
  startDate,
  endDate,
  tasksHTML,
}) => (
  <Styled.Container>
    <div>{title}</div>
    <div>{company}</div>
    <div>{url}</div>
    <div>{startDate}</div>
    <div>{endDate}</div>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: tasksHTML }} />
  </Styled.Container>
);

export default TabContent;
