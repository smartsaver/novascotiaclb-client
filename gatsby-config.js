module.exports = {
  siteMetadata: {
    title: `Novascotia CLB`,
    description: `Novascotia`,
    author: `SmartSAVER.org`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `novascotiaclb.ca`,
        short_name: `novascotiaclb`,
        start_url: `/`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
