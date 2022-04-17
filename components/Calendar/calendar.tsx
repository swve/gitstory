import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { randomInt } from "crypto";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { SelectedDateInterface, updateDate } from "@redux/actions";
import { Divider, Tooltip } from "@mui/material";

interface RootState {
  selectedDate: SelectedDateInterface;
}

export default function Calendar(props) {
  const router = useRouter();

  // Redux
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.selectedDate);

  // 📣 Filling & Init the Calendar
  //--------------------------------

  // init weekdays & Months
  const weekdaysArray = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  // Get date object - Dates in month - First day of month
  let date = dayjs(props.date).locale("fr");
  let daysInMonth = date.daysInMonth();
  let firstDayOfMonth = date.startOf("month").format("dd");
  const month = date.month() + 1;
  const year = date.year();

  // Init array calendar
  let calendar = [];

  // Execute Calendar function
  fillCalendar();

  // Fill Calendar in Array
  function fillCalendar() {
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
    router.push("/[...slug]/date/[...date]", `/commits/${router.query.slug[0]}/${router.query.slug[1]}/${router.query.slug[2]}/date/${year}/${month}/${day}`);
    dispatch(
      updateDate({
        day: day,
        month: month,
        year: year,
      })
    );
  }

  // 📣 Rendering
  //--------------------------------
  function renderCalendar() {
    return (
      <CalendarBox>
        <Tooltip title={"Check "+ monthsArray[month - 1] + " commits "}><MonthBox>
          {monthsArray[month - 1]}
        </MonthBox></Tooltip>
        <HeadDaysOfTheWeek>
          {weekdaysArray.map((day) => {
            return (
              <DayOfWeek>
                <i key={day + randomInt}>{day} </i>
              </DayOfWeek>
            );
          })}
        </HeadDaysOfTheWeek>
        <DaysOfTheMonth>
          {calendar.map((day) => {
            return (
              <DayOfMonth onClick={(e) => handleClickDayOfMonth(day, e)}>
                <DayBox key={day + randomInt} selected={parseInt(day) == state.day && month == state.month && year == state.year ? "selected" : null}>
                  {day}
                </DayBox>
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

// 📣 Styling
//--------------------------------

const MonthBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff14;
  padding: 10px;
  border-radius: 5px;
  transition:  0.7s;

  &:hover {
    background-color: #363167;
    cursor: pointer;
  }

  h2 {
    margin-right: 6px;
  }
`;

const ScanButton = styled.div``;
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
  border-width: 0.1px;
  color: #ffffff63;

  i {
    font-style: inherit;
  }
`;

const CalendarBox = styled.div`
  background-color: #171d21e6;
  backdrop-filter: saturate(180%) blur(14px);
  width: fit-content;
  height: 307px;
  border-radius: 6px;
  overflow: hidden;
  margin: 20px;
  padding: 10px;
  font-size: 14px;
  box-shadow: 0 9px 11px 2px rgb(3 8 19 / 20%);

  h2 {
    text-align: center;
    font-size: 15px;
    opacity: 0.9;
  }
`;

// CSS
const DayBox: any = styled.div`
  background-color: ${(props: any) => (props.selected ? "white" : null)};
  color: ${(props: any) => (props.selected ? "black" : "white")};
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${(props: any) => (props.selected ? "white" : "#101417")};
    color: ${(props: any) => (props.selected ? "black" : "white")};
  }
`;
