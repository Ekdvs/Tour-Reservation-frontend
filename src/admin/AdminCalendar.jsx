import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const localizer = momentLocalizer(moment);

const AdminCalendar = () => {
  // Sample events
  const [events, setEvents] = useState([
    {
      title: "Team Meeting",
      start: new Date(2025, 0, 15, 10, 0), // January 15, 2025, 10:00 AM
      end: new Date(2025, 0, 15, 11, 0),   // January 15, 2025, 11:00 AM
    },
    {
      title: "Project Deadline",
      start: new Date(2025, 0, 20),
      end: new Date(2025, 0, 20),
    },
  ]);

  // Add new event handler
  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt("Enter the event title:");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Admin Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px 0" }}
        selectable
        onSelectSlot={handleSelectSlot} // Allow selecting time slots
        onSelectEvent={(event) => alert(`Event: ${event.title}`)} // Display event details
      />
    </div>
  );
};

export default AdminCalendar;
