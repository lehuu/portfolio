import * as React from 'react';
import { useSiteMetadata } from '@hooks';
import Styled from './style';

const Footer: React.FunctionComponent = () => {
  const { title } = useSiteMetadata();
  const year = new Date().getFullYear();

  return (
    <Styled.Footer>
      <div>
        <Styled.InternalLink to="/imprint">Imprint</Styled.InternalLink>
      </div>
      <div>
        <Styled.NoBreakSpan>
          © {year} {title}.&nbsp;
        </Styled.NoBreakSpan>
        <Styled.NoBreakSpan>All rights reserved.</Styled.NoBreakSpan>
      </div>
      <div>
        <Styled.NoBreakSpan>Inspired by&nbsp;</Styled.NoBreakSpan>
        <Styled.NoBreakSpan>
          <Styled.ExternalLink href="https://brittanychiang.com/" target="_blank">
            Brittany Chiang
          </Styled.ExternalLink>
        </Styled.NoBreakSpan>
      </div>
    </Styled.Footer>
  );
};

export default Footer;
