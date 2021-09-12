import React from "react";
import Calendar from "@components/Calendar/Calendar";
import styled from "styled-components";

export default function YearCalendar({ withRelativeTop = false, year }) {
  // 📣 Filling & Init the YearCalendar
  //--------------------------------

  let year_dates = [];

  // Fill a Year of Month dates
  function createYearDates(year) {
    for (let i = 0; i < 12; i++) {
      year_dates.push(`${year}-${i + 1}-1`);
    }
  }

  createYearDates(year);


  // 📣 Styling
  //--------------------------------
  const YearCalendarBox = styled.div`
    ${withRelativeTop &&
    `top:-160px;
      position:relative;
`}
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
  `;

  // 📣 Final Rendering
  //--------------------------------
  return (
    <YearCalendarBox>
      {year_dates.map((date) => {
        return <Calendar key={date} date={date} />;
      })}
    </YearCalendarBox>
  );
}
