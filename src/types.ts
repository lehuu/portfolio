import { FluidObject } from 'gatsby-image';

export interface Project {
  frontmatter: {
    startDate: string;
    endDate: string;
    name: string;
    company: string;
    techstack: string[];
    links: { type: string; link: string }[];
    picture: {
      childImageSharp: {
        fluid: FluidObject[];
      };
    };
  };
  html: string;
}
