import Link from 'gatsby-link'
import React from 'react'
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaClockO from 'react-icons/lib/fa/clock-o'
import FaMapPin from 'react-icons/lib/fa/map-pin'
import FaTicket from 'react-icons/lib/fa/ticket'
import faunIcon from '../assets/images/fitonlogo.png'
import colors  from "../utils/colors"

const SHOW_PAST_CONCERTS_FOR_N_DAYS = 2
const MAX_NUM_CONCERTS = 5

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
         const concertid = concert.slug;
         const dateTime = new Date(concert.date)
         return (
          <div key={concert.id} css="margin: 4px">
          <Link to={`/${concert.slug}`}>
            <div css="margin: 32px 0px;">
              <img
                src={faunIcon}
                alt="FITON"
                width="50px"
              />
              <div css={`margin: 8px 0px; color: ${colors.tech47pink};`}>
                <h4>
                     {`${concert.title}`}
                </h4>
              </div>
              <div css="margin-bottom: 4px;">
                <FaCalendar /> {dateTime ? `${dateTime.toLocaleDateString('en-GB')}` : ''}
              </div>
              <div css="margin-bottom: 4px;">
                <FaClockO /> {dateTime ? ` ${dateTime.toLocaleTimeString()}` : '...'}
              </div>
              <div>
                {concert.tickets ? (
                  <div>
                    <FaTicket /> {` `}
                    <a href={concert.tickets}>Tickets available</a>
                  </div>
                ) : (
                  ''
                )}
                {concert.freeEntrance ? (
                  <div>
                    <FaTicket /> {` `}
                    Free Entrace
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          </Link>
          </div>
        )}
      )}
      </div>
    </div>
  )
}

export default ConcertSection
