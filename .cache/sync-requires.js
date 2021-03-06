const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/macbookpro11/Documents/Web/gatsby-site/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/macbookpro11/Documents/Web/gatsby-site/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/macbookpro11/Documents/Web/gatsby-site/src/pages/index.tsx"))),
  "component---src-pages-page-2-tsx": hot(preferDefault(require("/Users/macbookpro11/Documents/Web/gatsby-site/src/pages/page-2.tsx"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/macbookpro11/Documents/Web/gatsby-site/src/pages/using-typescript.tsx")))
}

