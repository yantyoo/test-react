import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ selectedDate, onClose, onSave }) => {
  const [content, setContent] = useState("");

  const handleSave = () => {
    onSave(selectedDate, content);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>{selectedDate} 일정 작성</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="일정을 입력하세요..."
        ></textarea>
        <div className="popup-buttons">
          <button onClick={handleSave}>저장</button>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
