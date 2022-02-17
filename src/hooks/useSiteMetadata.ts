import { useStaticQuery, graphql } from 'gatsby';

interface Site {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const useSiteMetadata = () => {
  const { site } = useStaticQuery<Site>(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
