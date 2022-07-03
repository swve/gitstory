import React from "react";
import Calendar from "@components/Calendar/Calendar";
import styled from "styled-components";
import { randomInt } from "crypto";
import FancyRender from "@components/Loading/FancyRender";

export default function YearCalendar({ withRelativeTop = false, year }) {
  let year_dates = [];

  function createYearDates(year) {
    for (let i = 0; i < 12; i++) {
      year_dates.push(`${year}-${i + 1}-1`);
    }
  }

  createYearDates(year);

  return (
    <FancyRender>
      <YearCalendarBox>
        {year_dates.map((date) => {
          return <Calendar key={date + Math.random()} date={date} />;
        })}
      </YearCalendarBox>
    </FancyRender>
  );
}

const YearCalendarBox = styled.div`
  top: -150px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;

  @media screen and (max-width: 1400px) {
    top: -120px;
  }

  @media screen and (max-width: 992px) {
    top: -70px;
  }
`;
