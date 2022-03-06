import React from "react";
import Calendar from "@components/Calendar/Calendar";
import styled from "styled-components";
import { randomInt } from "crypto";

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

  // 📣 Final Rendering
  //--------------------------------
  return (
    <YearCalendarBox>
      {year_dates.map((date) => {
        return <Calendar key={date + randomInt} date={date} />;
      })}
    </YearCalendarBox>
  );
}

// 📣 Styling
//--------------------------------
const YearCalendarBox = styled.div`
  top: -200px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
`;
