module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
       description:'dda',
       author:'dada',
  },
  plugins: [
     `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}