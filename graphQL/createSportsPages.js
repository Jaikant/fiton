const path = require('path');
const slash = require('slash');

const createSportsPages = (createPage, graphql) => {
  return new Promise((resolve, reject) => {

    const raceTemplate = path.resolve(
      'src/templates/sportspage.js'
    );
    resolve(
      graphql(
        `
        {
          allContentfulSportsPage {
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

        if (result.data.allContentfulSportsPage != null) {
          const races = result.data.allContentfulSportsPage.edges;

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

module.exports = createSportsPages;
