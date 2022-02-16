const productionPlugins =
  process.env.NODE_ENV === 'production' ? ['gatsby-plugin-no-sourcemaps'] : [];

module.exports = {
  siteMetadata: {
    title: 'Phuoc Le',
    siteUrl: 'https://www.bytecruncher.com',
  },
  plugins: [
    ...productionPlugins,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Phuoc Le',
        short_name: 'Phuoc Le',
        start_url: '/',
        background_color: '#1D1D1F',
        theme_color: '#FAFAFA',
        display: 'standalone',
        icon: 'src/icons/favicon.png',
      },
    },
  ],
};
