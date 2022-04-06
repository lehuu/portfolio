import React from 'react';
import { translateMonth } from '@utils';
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
}) => {
  const startDateFormatted = `${translateMonth(
    startDate.getMonth()
  )} ${startDate.getUTCFullYear()}`;
  const endDateFormatted =
    endDate === 'now'
      ? 'Present'
      : `${translateMonth(endDate.getMonth())} ${endDate.getUTCFullYear()}`;

  return (
    <Styled.Container key={title + company + startDate.toDateString()}>
      <Styled.TitleContainer>
        <b>
          <Styled.Title>{title} </Styled.Title>
          <Styled.Link href={url} target="_blank">
            @&nbsp;{company}
          </Styled.Link>
        </b>
      </Styled.TitleContainer>
      <Styled.DateContainer>
        <time dateTime={startDate.toISOString()}>{startDateFormatted}</time> -{' '}
        <time dateTime={(endDate === 'now' ? new Date() : endDate).toISOString()}>
          {endDateFormatted}
        </time>
      </Styled.DateContainer>
      {/* eslint-disable-next-line react/no-danger */}
      <Styled.TaskContainer dangerouslySetInnerHTML={{ __html: tasksHTML }} />
    </Styled.Container>
  );
};

export default TabContent;
