import React, { useState } from 'react';
import DatePickerInput from '../Date/DatePage';
import CustomCalendar from '../CustomCalendar/CustomCalendar';
import TimePicker from '../TimePicker/TimePicker';
import styled from './DatePickerWithYear.module.css';
import '../style/main.css';

export default function DatePickerWithYear() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState({
    date: null,
    time: '00:00'
  });

  const handleDateSelect = (date) => {
    setSelectedDateTime(prev => ({
      ...prev,
      date: date
    }));
  };

  const handleTimeSelect = (time) => {
    setSelectedDateTime(prev => ({
      ...prev,
      time: time
    }));
  };

  const getDisplayDate = () => {
    if (!selectedDateTime.date) return '';
    const date = new Date(selectedDateTime.date);
    return date.toLocaleDateString();
  };

  return (
    <>
     <section className={`${styled.datePicker} ${darkMode ? styled.dark : ''}`}>
      <div className="container">

        <div className={styled.datePicker__content}>
          <div className={styled.datePicker__top}>
            <h1 className={styled.title}>
              Календарь
            </h1>
            <button
              className={styled.themeToggle}
              onClick={() => setDarkMode((v) => !v)}
            >
              {darkMode ? 'Светлая тема' : 'Тёмная тема'}
            </button>
          </div>
          <h2 className={styled.subtitle}>
            Выберите удобную для вас дату и время
          </h2>
          <div className={styled.pickerContainer}>
            <DatePickerInput
              value={getDisplayDate()}
                onClick={() => setShowCalendar((v) => !v)}
                placeholder="Выберите дату"
                darkMode={darkMode}
            />
            
          <TimePicker
            value={selectedDateTime.time}
            onChange={handleTimeSelect}
            darkMode={darkMode}
          />
          </div>

          {showCalendar && (
            <div className={styled.calendarWrapper}>
              <CustomCalendar
                initialDate={selectedDateTime.date || new Date()}
                onSelectDate={(date) => {
                  handleDateSelect(date);
                  setShowCalendar(false);
                }}
                darkMode={darkMode}
              />
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};
