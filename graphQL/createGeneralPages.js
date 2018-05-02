const path = require('path');
const slash = require('slash');

const createGeneralPages = (createPage, graphql) => {
  return new Promise((resolve, reject) => {

    const raceTemplate = path.resolve(
      'src/templates/pages.js'
    );
    resolve(
      graphql(
        `
        {
          allContentfulPages {
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

        if (result.data.allContentfulPages != null) {
          const races = result.data.allContentfulPages.edges;

          races.forEach((race, index) => {

            const slug = race.node.slug;

            createPage({
              path: slug,
              component: slash(raceTemplate),
              context: {
                slug: slug,
              }
            });
          });
        }
      })
   );
  });
}

module.exports = createGeneralPages;
