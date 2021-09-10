import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";

export default function Calendar(props) {
  // 📣 Filling & Init the Calendar
  //--------------------------------

  // init weekdays
  const weekdaysArray = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  // Get date object - Dates in month - First day of month
  let date = dayjs(props.date).locale("fr");
  let daysInMonth = date.daysInMonth();
  let firstDayOfMonth = date.startOf("month").format("dd");
  const month = date.month()+1
  const year = date.year();

  // Init array calendar
  let calendar = [];

  // Execute Calendar function
  fillCalendar(date);

  // Fill Calendar in Array
  function fillCalendar(date) {
    let counter = true;
    weekdaysArray.forEach((day) => {
      if (counter === true) {
        if (String(day) === String(firstDayOfMonth)) {
          for (let i = 1; i <= daysInMonth; i++) {
            calendar.push(i);
          }
          counter = false;
        } else {
          calendar.push("");
        }
      }
    });
  }

  // 📣 Interaction
  //--------------------------------
  function handleClickDayOfMonth(day, e) {
    alert("Date: " + day +  "  " + String(month)+  "  " + String(year));
  }

  // 📣 Styling
  //--------------------------------
  const HeadDaysOfTheWeek = styled.div`
    display: flex;
    li {
      margin: 0;
      padding: 0;
      width: 35px;
      height: 35px;
      list-style: none;
      justify-content: flex-start;
      text-align: center;
      text-align: center;
    }
  `;

  const DaysOfTheMonth = styled.ul`
    margin: 0;
    padding: 0%;
    display: flex;
    list-style: none;
    justify-content: flex-start;
    text-align: center;
    width: 245px;
    min-width: 245px;
    flex-wrap: wrap;
  `;

  const DayOfMonth = styled.div`
    //
    height: 35px;
    width: 35px;
    min-height: 35px;
    min-width: 35px;
    //
    display: flex;
    justify-content: center;
    align-items: center;
    //
    border-width: 0.5px;
    i {
      font-style: inherit;
    }
  `;

  const DayOfWeek = styled.div`
    //
    height: 35px;
    width: 35px;
    min-height: 35px;
    min-width: 35px;
    //
    display: flex;
    justify-content: center;
    align-items: center;
    //
    border-width: 1px;
    color: #ffffff63;

    i {
      font-style: inherit;
    }
  `;

  const CalendarBox = styled.div`
    background-color: #1b2227;
    width: fit-content;
    border-radius: 6px;
    overflow: hidden;
    margin: 20px;
    padding:10px;
    font-size: 14px;
    box-shadow: 0 9px 11px 2px rgb(3 8 19 / 20%);
  `;

  // 📣 Rendering
  //--------------------------------
  function renderCalendar() {
    return (
      <CalendarBox>
        <HeadDaysOfTheWeek>
          {weekdaysArray.map((day) => {
            return (
              <DayOfWeek>
                <i>{day}</i>
              </DayOfWeek>
            );
          })}
        </HeadDaysOfTheWeek>
        <DaysOfTheMonth>
          {calendar.map((day) => {
            return (
              <DayOfMonth onClick={(e) => handleClickDayOfMonth(day, e)}>
                <i>{day}</i>
              </DayOfMonth>
            );
          })}
        </DaysOfTheMonth>
      </CalendarBox>
    );
  }

  // 📣 Final Rendering
  //--------------------------------
  return <div>{renderCalendar()}</div>;
}
