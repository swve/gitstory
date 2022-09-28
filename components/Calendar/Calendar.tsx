import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import { randomInt } from "crypto";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { SelectedDateInterface, updateDate } from "@redux/actions";
import { Tooltip } from "@mui/material";
import { GitSt } from "@services/gitstory";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";

interface RootState {
  selectedDate: SelectedDateInterface;
}

export default function Calendar(props) {
  const router = useRouter();
  const [calendarState, setCalendarState] = useState([]);
  const [monthActivityState, setMonthActivityState] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isScanOn, setIsScanOn] = useState(false);
  const GitStory = new GitSt();
  GitStory.init({ client: "github", owner: router.query.slug[1], repo: router.query.slug[2] });

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

  // Fill Calendar in Array
  function fillCalendar() {
    let counter = true;
    let calendar = [];
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
    setCalendarState(calendar);
    isScanOn ? null : setIsLoading(false);
  }

  async function scanMonth(month, year) {
    setIsScanOn(true);
    setIsLoading(true);
    let activity = await GitStory.getMonthCommitsActivity(year, month);
    setMonthActivityState(activity);

    setIsScanOn(false);
    setIsLoading(false);
  }

  useEffect(() => {
    fillCalendar();
  }, [isLoading]);

  function renderCalendar() {
    if (isLoading) {
      return (
        <CalendarBox>
          <Tooltip title={"Check " + monthsArray[month - 1] + " commits activity "}>
            <MonthBox
              onClick={() => {
                scanMonth(month, year);
              }}
            >
              {monthsArray[month - 1]}
            </MonthBox>
          </Tooltip>
          <HeadDaysOfTheWeek>
            {weekdaysArray.map((day) => {
              return (
                <DayOfWeek>
                  <i key={day + randomInt}>{day} </i>
                </DayOfWeek>
              );
            })}
          </HeadDaysOfTheWeek>
          <LoadingPanel>
            <CircularProgress style={{ color: "white" }} size={60} thickness={6} />
            <h5>Searching for commits... this may take minutes</h5>
          </LoadingPanel>
        </CalendarBox>
      );
    } else {
      return (
        <CalendarBox>
          <Tooltip
            id={monthsArray[month - 1]}
            arrow
            enterDelay={800}
            placement="top"
            title={"Check " + monthsArray[month - 1] + " commits activity  "}
          >
            <MonthBox
              onClick={() => {
                scanMonth(month, year);
              }}
            >
              {monthsArray[month - 1]}
            </MonthBox>
          </Tooltip>
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
            {calendarState.map((day) => {
              return (
                <DayOfMonth>
                  <DayBox
                    key={day + randomInt}
                    activity={monthActivityState[day - 1] ? (monthActivityState[day - 1].commits > 0 ? monthActivityState[day - 1].commits : 0) : false}
                    selected={parseInt(day) == state.day && month == state.month && year == state.year ? "selected" : null}
                  >
                    <Link href={`/commits/${router.query.slug[0]}/${router.query.slug[1]}/${router.query.slug[2]}/date/${year}/${month}/${day}`}>
                      <a>{day}</a>
                    </Link>
                  </DayBox>
                </DayOfMonth>
              );
            })}
          </DaysOfTheMonth>
        </CalendarBox>
      );
    }
  }

  return <div>{renderCalendar()}</div>;
}

const MonthBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff14;
  padding: 10px;
  border-radius: 5px;
  transition: 0.7s;

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

const LoadingPanel = styled.div`
  //center everything in the box
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 230px;
  width: 245px;
  h5 {
    width: 80%;
    padding-top: 20px;
    text-align: center;
  }
  //
`;

// CSS
const DayBox: any = styled.div`
  background-color: ${(props: any) => (props.selected ? "white" : null)};
  color: ${(props: any) => (props.selected ? "black" : "white")};
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  height: 30px;
  width: 30px;

  // Active status
  border: ${(props: any) => (props.activity ? "solid" : null)};
  border-color: ${(props: any) => (props.activity ? "hsl(246deg 49% 54% / " + (props.activity + 20) + "%);" : null)};

  &:hover {
    background-color: ${(props: any) => (props.selected ? "white" : "#101417")};
    color: ${(props: any) => (props.selected ? "black" : "white")};
  }
`;
