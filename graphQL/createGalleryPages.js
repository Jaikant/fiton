const path = require('path');
const slash = require('slash');
const createPaginatedPages = require('gatsby-paginate');

const createGalleryPages = (createPage, graphql) => {
  return new Promise((resolve, reject) => {

    const template = path.resolve(
      'src/templates/gallery.js'
    );
    resolve(
      graphql(
        `
        {
          allContentfulGallery {
            edges {
              node {
                slug
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.error) {
          return Promise.reject(result.errors)
        }

        result.data.allContentfulGallery.edges.map(({ node }) => {
          createPage({
            path: node.slug,
            component: template,
            context: {
              slug: node.slug
            }
          })
        })

        resolve()
      })
   );
  });
}

module.exports = createGalleryPages;
