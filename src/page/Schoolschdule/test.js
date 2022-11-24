import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Scheapis from './Api'


export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        eventContent={renderEventContent}
        viewClassNames='sf'
        id="sio"
      />
    )
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      <Scheapis />
    </>
  )
}