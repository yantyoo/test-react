import React, { useState } from "react";
import "./Calendar.css";

const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const dates = [];
    for (let i = 0; i < firstDay; i++) {
      dates.push(null);
    }
    for (let day = 1; day <= lastDate; day++) {
      dates.push(day);
    }

    return dates.map((day, index) => (
      <div
        key={index}
        className={`calendar-cell`}
        onClick={() =>
          day && onDateSelect(`${year}-${month + 1}-${day}`)
        }
      >
        {day}
      </div>
    ));
  };

  const changeMonth = (direction) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + direction
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>◀</button>
        <span>
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </span>
        <button onClick={() => changeMonth(1)}>▶</button>
      </div>
      <div className="calendar-grid">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
