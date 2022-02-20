import * as React from 'react';
import Styled from './style';

const Footer: React.FunctionComponent = () => (
  <Styled.Footer>
    <div>
      <Styled.InternalLink to="/imprint">Imprint</Styled.InternalLink>
    </div>
    <div>
      <Styled.NoBreakSpan>© 2022 Phuoc Le.&nbsp;</Styled.NoBreakSpan>
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

export default Footer;
