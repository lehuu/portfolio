import React from 'react';

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
  <div>
    <div>{title}</div>
    <div>{company}</div>
    <div>{url}</div>
    <div>{startDate}</div>
    <div>{endDate}</div>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: tasksHTML }} />
  </div>
);

export default TabContent;
