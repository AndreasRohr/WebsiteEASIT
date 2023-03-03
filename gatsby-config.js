/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `EASIT - IT einfach einfach.`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `TEQLY GmbH`,
    siteUrl: `https://easit.rent/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://easit.rent/`,
        sitemap: `https://easit.rent/sitemap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EASIT-Funnel`,
        short_name: `EASIT`,
        start_url: `/`,
        background_color: `#DD356E`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        display: `minimal-ui`,
        icon: `src/images/Easit-Icon.png`, // This path is relative to the root of the site.
        legacy: false,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
        // Place where crossOrigin attribute can be added.
      },
    },
  ],
}
