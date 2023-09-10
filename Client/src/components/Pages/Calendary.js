import Board from "../Board";
import "../../App.css";
import "../../components/Boardstyle.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import React, { useState } from "react";

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 1,
    title: "Available",
    start: new Date(2023, 8, 15, 10, 0), // Date and time when the event starts
    end: new Date(2023, 8, 15, 11, 0), // Date and time when the event ends
  },
];

const MyCalendar = (props) => {
  const [selectedRange, setSelectedRange] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (event) => {
    console.log("Event clicked:", event);
    setSelectedEvent(event);
  };
  var loadevent = 0;

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        defaultView="week"
        selectable={false}
        events={events}
        style={{ height: 500 }}
        eventPropGetter={(event) => {
          loadevent++;
          console.log("ola");
          //console.log("Event rendering:", event);
          return {
            onClick: (event) => {
              console.log("Event rendering:", event);
            }, // Handle event selection on click
            style: {
              backgroundColor: (loadevent / 2) % 2 === 0 ? "black" : "blue",
              borderRadius: "4px",
              cursor: "pointer",
            },
          };
        }}
      />
    </div>
  );
};

export default function Calendary() {
  return (
    <>
      {/* <div className="board-container">
        <Board />
      </div>
      <div className="button"> */}
      <div className="right">
        <h1 className="Q">Would you like to make an appointment?</h1>
        <button>Make an appointment</button>
      </div>
      {/* </div> */}
      <MyCalendar></MyCalendar>
    </>
  );
}
