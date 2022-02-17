import * as React from 'react';
import Styled from './style';

const Footer: React.FunctionComponent = () => (
  <Styled.Footer>
    <div>
      <Styled.InternalLink to="/imprint">Imprint</Styled.InternalLink>
    </div>
    <div>© 2022 Phuoc Le. All rights reserved.</div>
    <div>
      Inspired by{' '}
      <Styled.ExternalLink href="https://brittanychiang.com/" target="_blank">
        Brittany Chiang
      </Styled.ExternalLink>
    </div>
  </Styled.Footer>
);

export default Footer;
