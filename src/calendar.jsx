import React, { useState, useEffect } from "react";
import './Calendar.css';

const Calendar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <p className="month" id="month">
        {time.toLocaleString("en", { month: "long" })}
      </p>

      <p className="day" id="day">
        {time.toLocaleString("en", { weekday: "long" })}
      </p>

      <p className="date" id="date">
        {time.getDate()}
      </p>

      <p className="year" id="year">
        {time.getFullYear()}
      </p>

      <p className="time" id="time">
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </p>
    </div>
  );
};

export default Calendar;
