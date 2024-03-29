import { HashContext } from '@components/HashProvider';
import { THEME_TRANSITION_TIME_MS } from '@styles/mixin-transition';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import ThemeSwitchButton from '../ThemeSwitchButton';
import Styled, { OVERLAY_TRANSITION_NAME, SLIDEIN_TRANSITION_NAME } from './style';

export const RESUME_QUERY = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/content/resume/index.md/" }) {
      frontmatter {
        title
        link
      }
    }
  }
`;

interface SlideInProps {
  isOpen: boolean;
  onRequestClose: () => void;
  links: { label: string; to: string }[];
}

const SlideIn: React.FunctionComponent<SlideInProps> = ({ isOpen, onRequestClose, links }) => {
  const { hash, disableScrollTracking } = React.useContext(HashContext);

  useEffect(() => {
    const handleEscapeClick = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onRequestClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeClick);
    };
  }, [isOpen]);

  const {
    markdownRemark: {
      frontmatter: { link },
    },
  } = useStaticQuery(RESUME_QUERY);

  return (
    <>
      <CSSTransition
        in={isOpen}
        unmountOnExit
        timeout={THEME_TRANSITION_TIME_MS}
        classNames={OVERLAY_TRANSITION_NAME}
      >
        <Styled.Overlay onClick={onRequestClose} />
      </CSSTransition>
      <CSSTransition
        in={isOpen}
        unmountOnExit
        timeout={THEME_TRANSITION_TIME_MS}
        classNames={SLIDEIN_TRANSITION_NAME}
      >
        <Styled.SlideInContainer tabIndex={-1}>
          <Styled.LinkList>
            {links.map((item) => (
              <li key={item.label}>
                <Styled.NavLink
                  isActive={hash === item.to}
                  to={item.to}
                  onClick={() => {
                    onRequestClose();
                    disableScrollTracking();
                  }}
                >
                  {item.label}
                </Styled.NavLink>
              </li>
            ))}
          </Styled.LinkList>
          <Styled.DownloadLink href={link} target="_blank">
            Résumé
          </Styled.DownloadLink>
          <Styled.ButtonContainer>
            <ThemeSwitchButton />
          </Styled.ButtonContainer>
        </Styled.SlideInContainer>
      </CSSTransition>
    </>
  );
};

export default SlideIn;
