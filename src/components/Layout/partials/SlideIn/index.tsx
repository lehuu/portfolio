import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ThemeSwitchButton from '../ThemeSwitchButton';
import Styled from './style';

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
  const hash = typeof window !== 'undefined' ? `/${window.location.hash}` : '';

  const {
    markdownRemark: {
      frontmatter: { link },
    },
  } = useStaticQuery(RESUME_QUERY);

  return (
    <>
      <Styled.Overlay isOpen={isOpen} onClick={onRequestClose} />
      <Styled.SlideInContainer isOpen={isOpen}>
        <Styled.LinkList>
          {links.map((item) => (
            <li key={item.label}>
              <Styled.NavLink
                isActive={hash === item.to}
                to={item.to}
                onClick={() => {
                  onRequestClose();
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
    </>
  );
};

export default SlideIn;
