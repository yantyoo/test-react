import React, { useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import Popup from "../components/Popup/Popup";
import "./Home.css";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [schedules, setSchedules] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsPopupOpen(true);
  };

  const handleSaveSchedule = (date, content) => {
    setSchedules((prev) => ({
      ...prev,
      [date]: content,
    }));
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="home">
      <h1>캘린더 test</h1>
      <Calendar onDateSelect={handleDateSelect} />
      {isPopupOpen && (
        <Popup
          selectedDate={selectedDate}
          onClose={handleClosePopup}
          onSave={handleSaveSchedule}
        />
      )}
      <div className="schedule-list">
        <h2>저장된 일정</h2>
        {Object.entries(schedules).map(([date, content]) => (
          <div key={date} className="schedule-item">
            <strong>{date}:</strong> {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
