import React from 'react';
import { translateMonth } from '@utils';
import Styled from './style';

interface TabContentProps {
  title: string;
  company: string;
  url: string;
  startDate: Date;
  endDate?: Date;
  consultancy?: string;
  consultancyUrl?: string;
  tasksHTML: string;
}

const TabContent: React.FunctionComponent<TabContentProps> = ({
  title,
  company,
  url,
  startDate,
  endDate,
  tasksHTML,
  consultancy,
  consultancyUrl,
}) => {
  const startDateFormatted = `${translateMonth(
    startDate.getMonth()
  )} ${startDate.getUTCFullYear()}`;
  const endDateFormatted = !endDate
    ? 'Present'
    : `${translateMonth(endDate.getMonth())} ${endDate.getUTCFullYear()}`;

  return (
    <Styled.Container key={title + company + startDate.toDateString()}>
      <Styled.TitleContainer>
        <b>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Link href={url} target="_blank">
            {' '}
            @{company}
          </Styled.Link>
        </b>
        {!!consultancy && (
          <>
            {' '}
            via
            <b>
              <Styled.Link href={consultancyUrl} target="_blank">
                {' '}
                @{consultancy}
              </Styled.Link>
            </b>
          </>
        )}
      </Styled.TitleContainer>
      <Styled.DateContainer>
        <time dateTime={startDate.toISOString()}>{startDateFormatted}</time> -{' '}
        <time dateTime={(!endDate ? new Date() : endDate).toISOString()}>{endDateFormatted}</time>
      </Styled.DateContainer>
      {/* eslint-disable-next-line react/no-danger */}
      <Styled.TaskContainer dangerouslySetInnerHTML={{ __html: tasksHTML }} />
    </Styled.Container>
  );
};

export default TabContent;
