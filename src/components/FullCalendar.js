import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

function CalendarComponent() {
  const events = [
    { title: "Event 1", date: "2023-05-01" },
    { title: "Event 2", date: "2023-05-05" },
    { title: "Event 3", date: "2023-05-10" },
  ];

  return (
    <div>
      <FullCalendar
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
}

export default CalendarComponent;
