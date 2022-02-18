import * as React from 'react';
import ThemeSwitchButton from '../../../ThemeSwitchButton';
import Styled from './style';

const resumeLink = {
  label: 'Résumé',
  to: 'https://files.bytecruncher.com/documents/Phuoc_Le_CV.pdf',
};

const Header: React.FunctionComponent = () => (
  <Styled.Header>
    <Styled.Navigation>
      <div>
        <Styled.Title to="/">Phuoc Le</Styled.Title>
      </div>

      <Styled.ButtonContainer>
        <Styled.DownloadLink href={resumeLink.to} target="_blank">
          {resumeLink.label}
        </Styled.DownloadLink>
      </Styled.ButtonContainer>
    </Styled.Navigation>
    <ThemeSwitchButton />
  </Styled.Header>
);

export default Header;
