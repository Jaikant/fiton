import React from 'react'
import FacebookProvider, { Comments } from 'react-facebook';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaClockO from 'react-icons/lib/fa/clock-o'
import FaMapPin from 'react-icons/lib/fa/map-pin'
import FaTicket from 'react-icons/lib/fa/ticket'
import PageBody from '../components/pagebody'

const EventTemplate = ({ location, pathContext }) => {
  const { node: concert } = pathContext.event
  const concertTitle = concert.title
  const concertDescription = concert.description.childMarkdownRemark.html
  const dateTime = new Date(concert.date)
  return (
    <div css="margin: 3.5rem auto;">
      <div css="display: flex; margin: 0 auto; max-width: 940px;">
        <div>
        <h1> {concert.title} </h1>
        <div>
          <FaCalendar /> {dateTime ? `${dateTime.toLocaleDateString('en-GB')}` : ''}
        </div>
        <div>
          <FaClockO /> {dateTime ? ` ${dateTime.toLocaleTimeString()}` : '...'}
        </div>
        <div>
          <FaMapPin /> <a href={concert.locationLink}>{concert.location}</a>
        </div>
        <div>
          {concert.tickets ? (
            <div>
              <FaTicket /> {` `}
              <a href={concert.tickets}>Tickets available</a>
            </div>
          ) : (
            undefined
          )}
          {concert.freeEntrance ? (
            <div>
              <FaTicket /> {` `}
              Free Entrace
            </div>
          ) : (
            undefined
          )}
        </div>
        </div>
      </div>
      <br />
      <hr />
      <PageBody
        html={concertDescription}
        width={true}
      />
      <div css="padding-bottom: 16px; margin-bottom: 16px;" />
      <div css="display: flex; justify-content: center; padding: 0px 32px;">
        <div css="width: 100%">
          <FacebookProvider appId="975479032610796">
            <Comments href={`https://fiton.com${location.pathname}`} width="100%" />
          </FacebookProvider>
        </div>
      </div>
    </div>
  )
}

export default EventTemplate
