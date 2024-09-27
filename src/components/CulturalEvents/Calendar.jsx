/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable array-callback-return */
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import "./Calendar.css";
import useCustomFetch from "../../Hooks/useCustomFetch";
import LoadingComponent from "../Loading/loadingComponent";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsData = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
];

// {
//   isOpen, onOpen, onClose;
// }
function Calendar() {
  // define the state for the current date using the JS Date object
  const [currentDate, setCurrentDate] = React.useState(() => {
    // try to retrieve the saved date from localStorage
    const savedDate = localStorage.getItem("currentDate");
    return savedDate ? new Date(savedDate) : new Date();
  });
  const navigate = useNavigate();
  //   const culturalEventsDate = [];
  //   const culturalEventsType = [];
  // const [monthData, setMonthData] = useState('');

  // save the current date to localStorage each time the currentDate state changes
  React.useEffect(() => {
    localStorage.setItem("currentDate", currentDate);
  }, [currentDate]);

  const currentMonthIndex = currentDate.getMonth();

  // get the number of days in the current month
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // get the day of the week for the first day of the current month (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const firstDayOfWeek = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  // get the number of days in the previous month
  const prevMonthLastDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDate();

  // get the current year and month from the current date
  const currentYearMonth = `${currentDate.getFullYear()} ${currentDate.toLocaleString(
    "en-US",
    {
      month: "long",
    }
  )}`;

  // function to handle the back and next buttons by incrementing or decrementing the month by 1 (increment = -1 or 1)
  function handleDateChange(increment) {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setCurrentDate(newDate);
  }

  // function to handle the reset button by setting the current date to today
  function handleResetClick() {
    setCurrentDate(new Date());
  }

  const yearsData = [];

  const addYearsData = () => {
    const exp = new Date();
    // eslint-disable-next-line no-plusplus
    for (let i = 1950; i <= exp.getFullYear(); i++) {
      yearsData.push(i);
    }
  };

  function handleYearChange(e) {
    const newDate = new Date(currentDate);
    newDate.setFullYear(e.target.value);
    setCurrentDate(newDate);
  }
  function handleMonthChange(e) {
    const newDate = new Date(currentDate);
    let exp = 0;
    switch (e.target.value) {
      case "Jan":
        exp = 0;
        break;
      case "Feb":
        exp = 1;
        break;
      case "Mar":
        exp = 2;
        break;
      case "Apr":
        exp = 3;
        break;
      case "May":
        exp = 4;
        break;
      case "Jun":
        exp = 5;
        break;
      case "Jul":
        exp = 6;
        break;
      case "Aug":
        exp = 7;
        break;
      case "Sep":
        exp = 8;
        break;
      case "Oct":
        exp = 9;
        break;
      case "Nov":
        exp = 10;
        break;
      case "Dec":
        exp = 11;
        break;
      default:
        exp = 0;
    }
    newDate.setMonth(exp);
    setCurrentDate(newDate);
  }

  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getCulturalEvents`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  // render date boxes for the current month, previous month, and next month
  function getDayClassName(
    date,
    isCurrentMonth,
    isToday,
    isEventIsGalleryIsAwardsIsScholarship,
    index
  ) {
    // console.log(date,isCurrentMonth,isToday, "999999999999");
    if (!isCurrentMonth || date < 1 || date > daysInMonth) {
      return "inactive";
    }
    if (isToday) {
      return "today";
    }
    if (isEventIsGalleryIsAwardsIsScholarship) {
      //   console.log(index, "000090909");
      return data[index].eventType === "events"
        ? "orange"
        : data[index].eventType === "awards"
        ? "green"
        : data[index].eventType === "gallery"
        ? "red"
        : data[index].eventType === "scholarship"
        ? "pink"
        : "";
    }
    return "";
  }

  const checkCuluturalEventDate = (exp, x) => {
    const month = x.getMonth();
    const date = exp;
    const year = x.getFullYear();
    let index;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.length; i++) {
      const y = new Date(data[i].eventDate);
      if (
        y.getDate() === date &&
        y.getFullYear() === year &&
        y.getMonth() === month
      ) {
        index = i;
      }
    }
    return index;
  };

  const dateImageNavigation = (t, index) => {
    if (t) {
      navigate("/cutural-events-images", { state: { row: data[index] } });
    }
  };

  const dateBoxes = Array.from(
    { length: Math.ceil((daysInMonth + firstDayOfWeek) / 7) },
    (_, i) => i
  ).map((week) => (
    <div className="week" key={week}>
      {Array.from({ length: 7 }, (_, i) => i).map((day) => {
        const date = week * 7 + day + 1 - firstDayOfWeek;
        const isCurrentMonth = currentDate.getMonth() === currentMonthIndex;
        const actualDate = new Date();
        const actualMonth = actualDate.getMonth();
        const isActualMonth = actualMonth === currentMonthIndex;
        const actualYear = actualDate.getFullYear();
        const isActualYear = actualYear === currentDate.getFullYear();
        const isToday =
          isActualMonth && isActualYear && currentDate.getDate() === date;

        let dateText;
        if (date < 1) {
          dateText = prevMonthLastDay + date;
        } else if (date > daysInMonth) {
          dateText = date - daysInMonth;
        } else {
          dateText = date;
        }
        //   console.log(dateText, "sadajda");
        const index = data
          ? checkCuluturalEventDate(dateText, currentDate)
          : false;
        const isEventIsGalleryIsAwardsIsScholarship = data ? index : false;

        return (
          <div
            className={`day ${getDayClassName(
              date,
              isCurrentMonth,
              isToday,
              isEventIsGalleryIsAwardsIsScholarship,
              index
            )}`}
            key={`${week}-${day}`}
            onClick={() =>
              dateImageNavigation(isEventIsGalleryIsAwardsIsScholarship, index)
            }
          >
            <div className="number">{dateText}</div>
          </div>
        );
      })}
    </div>
  ));

  if (loading) return <LoadingComponent />;
  if (error) return <h1>error...</h1>;

  return (
    <div style={{ display: "flex" }}>
      <div className="calendar">
        <div className="calendarHeader">
          <div className="controls">
            <button
              className="button button_prev"
              onClick={() => handleDateChange(-1)}
              type="button"
            >
              Back
            </button>
            <button
              className="button button_next"
              onClick={() => handleDateChange(1)}
              type="button"
            >
              Next
            </button>
          </div>
          <h1 className="title">{currentYearMonth}</h1>

          {addYearsData()}
          {yearsData.length > 0 && (
            <select onChange={handleYearChange}>
              {yearsData.map((item) => (
                <option value={`${item}`} key={item}>
                  {item}
                </option>
              ))}
            </select>
          )}

          <select onChange={handleMonthChange} style={{ marginLeft: "1.5vw" }}>
            {monthsData.map((item) => (
              <option value={`${item}`} key={item}>
                {item}
              </option>
            ))}
          </select>
          <button
            className="button reset"
            onClick={handleResetClick}
            type="button"
          >
            Today
          </button>
        </div>
        <div className="body">
          <div className="week">
            {days.map((day) => (
              <div className="day-name" key={day}>
                {day}
              </div>
            ))}
          </div>
          {dateBoxes}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <div style={{ backgroundColor: "#85c669" }} className="buttomButtons">
            Awards
          </div>
          <div style={{ backgroundColor: "#e74a4a" }} className="buttomButtons">
            Gallery
          </div>
          <div style={{ backgroundColor: "#e2adff" }} className="buttomButtons">
            Events
          </div>
          <div style={{ backgroundColor: "pink" }} className="buttomButtons">
            ScholarShips
          </div>
          <div style={{ backgroundColor: "#AED8F0" }} className="buttomButtons">
            Today
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          navigate("/cutural-events-table", { state: { data } });
        }}
        style={{ transform: "Translate(-15vw,2.5vw)", borderRadius: "2vw" }}
      >
        View All
      </Button>
    </div>
  );
}

export default Calendar;
