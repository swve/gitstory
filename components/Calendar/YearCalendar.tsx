import React from "react";
import dayjs from "dayjs";
import Calendar from "./Calendar";
import styled from "styled-components";

export default function YearCalendar(props) {
  // 📣 Filling & Init the YearCalendar
  //--------------------------------
  const year = props.year;
  let year_dates = [];

  // Fill a Year of Month dates
  function createYearDates(year) {
    for (let i = 0; i < 12; i++) {
      year_dates.push(`${year}-${i + 1}-1`);
    }
  }

  createYearDates(year);

  return (
    <YearCalendarBox>
      {year_dates.map((date) => {
        return <Calendar date={date} />;
      })}
    </YearCalendarBox>
  );
}

// 📣 Styling
//--------------------------------
const YearCalendarBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
`;
