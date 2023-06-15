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
    description: `Mit EASIT können Sie Ihre IT einfach einfach machen. Wir bieten Ihnen eine einfache und transparente IT-Lösung für Ihr Unternehmen.`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://easit.rent/`,
        sitemap: `https://easit.rent/sitemap-0.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inconsolata`,
          `JetBrains Mono`,
          `Titillium Web`
        ],
        display: 'swap'
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
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
        "G-2FHN7FDZC3", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
        anonymize_ip: true,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
        // Puts tracking script in the head instead of the body
          head: true,
        },
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WGZ4XPG",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
  ],
}
