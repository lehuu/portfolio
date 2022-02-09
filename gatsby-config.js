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
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
