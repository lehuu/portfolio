/* eslint-disable react/no-danger */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useColorMode } from 'theme-ui';
import IconLink from '../../IconLink';
import Styled from './style';

const INTRO_QUERY = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/content/intro/index.md/" }) {
      html
      frontmatter {
        title
        pictures {
          light {
            childImageSharp {
              gatsbyImageData(width: 700, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
            }
          }
          dark {
            childImageSharp {
              gatsbyImageData(width: 700, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        links {
          type
          link
        }
      }
    }
  }
`;

const Intro: React.FunctionComponent = () => {
  const { markdownRemark } = useStaticQuery(INTRO_QUERY);
  const [colorMode] = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const { frontmatter } = markdownRemark;

  const lightImage = getImage(frontmatter.pictures.light);
  const darkImage = getImage(frontmatter.pictures.dark);

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Styled.ImageColorBlur />
        <Styled.ImageColorWrapper />
        <Styled.ProfilePicture isVisible={!isDarkMode}>
          {colorMode && <GatsbyImage image={lightImage} alt="porrait" />}
        </Styled.ProfilePicture>
        <Styled.ProfilePicture isAbsolute isVisible={isDarkMode}>
          {colorMode && <GatsbyImage image={darkImage} alt="porrait" />}
        </Styled.ProfilePicture>
      </Styled.ImageContainer>

      <Styled.TextContainer dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      <Styled.LinkContainer>
        {frontmatter.links.map((link) => (
          <React.Fragment key={link.type}>
            <IconLink type={link.type} link={link.link} />
          </React.Fragment>
        ))}
      </Styled.LinkContainer>
    </Styled.Container>
  );
};

export default Intro;
