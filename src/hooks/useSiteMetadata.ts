import { useStaticQuery, graphql } from 'gatsby';

interface Site {
  site: {
    siteMetadata: {
      name: string;
      lang: string;
      siteUrl: string;
      description: string;
      image: string;
    };
  };
}

const useSiteMetadata = () => {
  const { site } = useStaticQuery<Site>(
    graphql`
      query {
        site {
          siteMetadata {
            name
            lang
            siteUrl
            description
            image
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
