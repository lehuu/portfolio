const productionPlugins =
  process.env.NODE_ENV === 'production' ? ['gatsby-plugin-no-sourcemaps'] : [];

const metadata = {
  title: 'Phuoc Le',
  siteUrl: 'https://www.bytecruncher.com',
  description: "Phuoc Le's personal portfolio website. Software Engineer.",
  lang: 'en',
};

module.exports = {
  siteMetadata: {
    ...metadata,
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
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': './src/components',
          '@icons': './src/icons',
          '@pages': './src/pages',
          '@styles': './src/styles',
          '@hooks': './src/hooks',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        ...metadata,
        name: metadata.title,
        short_name: metadata.title,
        start_url: '/',
        background_color: '#1D1D1F',
        theme_color: '#FAFAFA',
        display: 'standalone',
        icon: 'src/icons/favicon.png',
      },
    },
  ],
};
