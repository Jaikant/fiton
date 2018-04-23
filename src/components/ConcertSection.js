import Link from 'gatsby-link'
import React from 'react'
import faunIcon from '../assets/images/fitonlogo.png'

const SHOW_PAST_CONCERTS_FOR_N_DAYS = 2
const MAX_NUM_CONCERTS = 3

const ConcertSection = ({ concerts }) => {
  const dateCheckpoint = new Date()
  dateCheckpoint.setDate(
    dateCheckpoint.getDate() - SHOW_PAST_CONCERTS_FOR_N_DAYS
  )
  const sortedConcerts = concerts
    .map(obj => obj.node)
    .filter(concert => new Date(concert.date) > dateCheckpoint)
    .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
    .slice(0, MAX_NUM_CONCERTS)

  if (sortedConcerts.length === 0) {
    return <div />
  }

  return (
    <div>
      <div style={{margin: '16px'}}>
        <h2> Upcoming events </h2>
        {sortedConcerts.map((concert) => {
         const concertid = concert.id;
         return (
          <div key={concert.id} style={{display: 'flex', padding: '16px'}}>
            <div style={{margin: '0px 8px'}}>
              <img
                src={faunIcon}
                alt="Krashna Musika"
                width="50px"
              />
            </div>
            <div>
              <h5>
                <Link to={`/concerts/${concert.id}`} style={{fontWeight: 'bold'}}>
                   {`${concert.id}`}
                </Link>
              </h5>
              <p>
                <span />
                {new Date(concert.date).toLocaleDateString('nl-NL')}
                {' - '}
                <span />
                <a href={concert.locationLink}>
                  {concert.location}
                </a>
                {concert.tickets ? (
                  <a href={concert.tickets}>
                    <span >
                      <span  />
                      Tickets Available
                    </span>
                  </a>
                ) : (
                  undefined
                )}
                {concert.freeEntrance ? (
                  <a href={concert.tickets}>
                    <span>
                      <span />
                      Free Entrance
                    </span>
                  </a>
                ) : (
                  undefined
                )}
              </p>
            </div>
          </div>
        )}
      )}
      </div>
    </div>
  )
}

export default ConcertSection
