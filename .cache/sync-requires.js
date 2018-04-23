// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/jai/work/guides/consulting/tech47/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-tags-js": preferDefault(require("/Users/jai/work/guides/consulting/tech47/src/templates/tags.js")),
  "component---src-templates-blogcontentful-js": preferDefault(require("/Users/jai/work/guides/consulting/tech47/src/templates/blogcontentful.js")),
  "component---src-templates-contentful-post-template-js": preferDefault(require("/Users/jai/work/guides/consulting/tech47/src/templates/contentful-post-template.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/jai/work/guides/consulting/tech47/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/jai/work/guides/consulting/tech47/src/pages/404.js"))
}

exports.json = {
  "layout-index.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/layout-index.json"),
  "tags.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/tags.json"),
  "tags-serverless.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/tags-serverless.json"),
  "tags-fullstack.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/tags-fullstack.json"),
  "tags-websites.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/tags-websites.json"),
  "tags-cloud.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/tags-cloud.json"),
  "index.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/index.json"),
  "blog-publishing-platform-tech.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/blog-publishing-platform-tech.json"),
  "responsive-images.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/responsive-images.json"),
  "reactjs-static-website-disruptions.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/reactjs-static-website-disruptions.json"),
  "blog-sherpafeet.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/blog-sherpafeet.json"),
  "blog-social-good.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/blog-social-good.json"),
  "blog-aws-code-deploy.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/blog-aws-code-deploy.json"),
  "blog-build-blog-gatsbyjs.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/blog-build-blog-gatsbyjs.json"),
  "dev-404-page.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/404.json"),
  "404-html.json": require("/Users/jai/work/guides/consulting/tech47/.cache/json/404-html.json")
}