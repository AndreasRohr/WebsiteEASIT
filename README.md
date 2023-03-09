# EASIT- Landing Page

## Description
The EASIT landing page acts as a funnel page for our EASIT product line.

---

## Installation
We use clean install to make sure all dependencies are installed correctly in the right version. This is done by running the following command:
```bash
npm ci
```
---

## Develop the App
To start a development server run the following command:
```bash
gatsby develop
```
---

## Build & Test the App
To see how the app runs on a webserver it needs to be built and deployed in a docker container. This can be achieved by running the following commands:
**Docker deamon must be running.**
```bash
npm ci
gatsby build
docker build -t easit-landing-page:latest .
docker run -p 8080:80 easit-landing-page:latest
```
---
## Plugins

- [Robots](https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/?=robots)
- [Sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/?=sitemap)
- [Google Tag Manager](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-tagmanager/?=google)
- [Emotion](https://www.gatsbyjs.com/plugins/gatsby-plugin-emotion/)
- [Styled-Components](https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/)
- [Preload Fonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-preload-fonts/?=font)
- To Install:
- [Google Analytics](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/?=google)
-