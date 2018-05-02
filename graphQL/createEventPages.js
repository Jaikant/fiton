const path = require('path');
const slash = require('slash');

const createEventPages = (createPage, graphql) => {
  return new Promise((resolve, reject) => {

    const eventTemplate = path.resolve(
      'src/templates/eventTemplate.js'
    );
    resolve(
      graphql(
        `
        {
           allContentfulEvents {
            edges {
              node {
                title
                slug
                type
                date
                location
                locationLink
                freeEntrance
                tickets
                description {
                  childMarkdownRemark {
                    html
                  }
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.error) {
          return Promise.reject(result.errors)
        }

        console.log("Result of events are: ", result.data)


        if (result.data.allContentfulEvents != null) {
          const events = result.data.allContentfulEvents.edges;

          events.forEach((event, index) => {

            const slug = event.node.slug;

            console.log("creating page for slug: ", slug)

            createPage({
              path: slug,
              component: slash(eventTemplate),
              context: {
                slug: slug,
                event: event,
              }
            });
          });
        }
      })
   );
  });
}

module.exports = createEventPages;
