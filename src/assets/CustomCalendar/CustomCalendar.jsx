import React, { useState } from 'react';
import styled from './CustomCalendar.module.css';

const months = [
  'Январь', 'Февраль', 'Март', 'Апрель',
  'Май', 'Июнь', 'Июль', 'Август',
  'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfWeek = (year, month) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // 0 - понедельник, 6 - воскресенье
};
const getYears = (center) => Array.from({ length: 12 }, (_, i) => center - 4 + i);

export default function CustomCalendar({ onSelectDate, initialDate = new Date(), darkMode = false }) {
  const [mode, setMode] = useState('day');
  const [year, setYear] = useState(initialDate.getFullYear());
  const [month, setMonth] = useState(initialDate.getMonth());
  const [day, setDay] = useState(initialDate.getDate());
  const [centerYear, setCenterYear] = useState(year);
  const containerClass = `${styled.calendar__container} ${darkMode ? styled.dark : ''}`;

  const changeYear = (newYear) => {
    setYear(newYear);
    setCenterYear(newYear);
    setMode('month');
    setDay(null);
  };

  const changeMonth = (newMonth) => {
    setMonth(newMonth);
    setMode('day');
    setDay(null);
  };

  const selectDay = (selectedDay) => {
    setDay(selectedDay);
    onSelectDate?.(new Date(year, month, selectedDay));
  };

  const prevYears = () => setCenterYear(centerYear - 12);
  const nextYears = () => setCenterYear(centerYear + 12);

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
      setCenterYear(year - 1);
    } else setMonth(month - 1);
    setDay(null);
  };

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
      setCenterYear(year + 1);
    } else setMonth(month + 1);
    setDay(null);
  };

  if (mode === 'year') {
    const years = getYears(centerYear);
    return (
      <div className={containerClass}>
        <div className={styled.calendar__period}>
          <button onClick={prevYears}>{'<'}</button>
          <span>{centerYear}</span>
          <button onClick={nextYears}>{'>'}</button>
        </div>
        <div className={styled.calendar__grid}>
          {years.map((y) => (
            <div
              key={y}
              className={`${styled.calendar__year} ${y === year ? styled.selected : ''} ${darkMode ? styled.darkItem : ''}`}
              onClick={() => changeYear(y)}
            >
              {y}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (mode === 'month') {
    return (
      <div className={containerClass}>
        <div className={styled.calendar__period}>
          <button onClick={() => setMode('year')}>{'<'}</button>
          <span>{year}</span>
          <button onClick={() => setMode('day')}>{'>'}</button>
        </div>
        <div className={styled.calendar__grid_months}>
          {months.map((m, i) => (
            <div
              key={m}
              className={`${styled.calendar__month} ${i === month ? styled.selected : ''} ${darkMode ? styled.darkItem : ''}`}
              onClick={() => changeMonth(i)}
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);
  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={containerClass}>
      <div className={styled.calendar__period}>
        <button onClick={prevMonth}>{'<'}</button>
        <div>
          <span className={styled.clickable} onClick={() => setMode('month')}>
            {months[month]}
          </span>{' '}
          <span className={styled.clickable} onClick={() => setMode('year')}>
            {year}
          </span>
        </div>
        <button onClick={nextMonth}>{'>'}</button>
      </div>
      <div className={styled.calendar__weekdays}>
        {weekdays.map((d) => (
          <div key={d} className={`${styled.calendar__weekday} ${darkMode ? styled.darkWeekday : ''}`}>
            {d}
          </div>
        ))}
      </div>
      <div className={styled.calendar__grid_days}>
        {blanks.map((_, i) => (
          <div key={`b${i}`} className={styled.calendar__empty}></div>
        ))}
        {days.map((d) => (
          <div
            key={d}
            className={`${styled.calendar__day} ${d === day ? styled.selected : ''} ${darkMode ? styled.darkItem : ''}`}
            onClick={() => selectDay(d)}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}
