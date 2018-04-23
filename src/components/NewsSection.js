import Link from 'gatsby-link'
import React from 'react'

const MAX_NUM_NEWS = 3

const NewsSection = ({ news }) => {
  const sortedNews = news
    .map(obj => obj.node)
    .sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0))
    .slice(0, MAX_NUM_NEWS)

  if (sortedNews.length === 0) {
    return <div />
  }

  return (
    <div>
      <div>
        <h2> News </h2>
        {sortedNews.map(nnews => (
          <div key={nnews.id} className="row mb-2">
            <div>
              <h5>
                <Link to={`/news/${nnews.id}`} className="text-dark font-weight-bold">
                  {`${nnews.id}`}
                </Link>
              </h5>
              <p>
                <span />
                {new Date(nnews.date).toLocaleDateString('nl-NL')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsSection
