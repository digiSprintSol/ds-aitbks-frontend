/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import "./Calendar.css";
import useCustomFetch from "../../Hooks/useCustomFetch";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
  const culturalEventsDate = [];
  const culturalEventsType = [];
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

  function handleMonthChange(e) {
    const newDate = new Date(currentDate);
    let exp = 0;
    switch (e.target.value) {
      case "jan":
        exp = 0;
        break;
      case "feb":
        exp = 1;
        break;
      case "mar":
        exp = 2;
        break;
      case "apr":
        exp = 3;
        break;
      case "may":
        exp = 4;
        break;
      case "jun":
        exp = 5;
        break;
      case "jul":
        exp = 6;
        break;
      case "aug":
        exp = 7;
        break;
      case "sep":
        exp = 8;
        break;
      case "oct":
        exp = 9;
        break;
      case "nov":
        exp = 10;
        break;
      case "dec":
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
  function getDayClassName(date, isCurrentMonth, isToday) {
    // console.log(date,isCurrentMonth,isToday, "999999999999");
    if (!isCurrentMonth || date < 1 || date > daysInMonth) {
      return "inactive";
    }
    if (isToday) {
      return "today";
    }
    return "";
  }

  useEffect(() => {
    if (data) {
      data.map((item) => {
        culturalEventsDate.push(item.eventDate);
        culturalEventsType.push(item.eventType);
      });
    }
    // console.log(culturalEventsDate, culturalEventsType, "7777777777777");
  }, [data]);

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
        //   console.log(isActualMonth, isActualYear, currentDate.getDate(), date,"88888888888888888888888888");
        // const isEventIsGalleryIsAwardsIsScholarship=

        let dateText;
        if (date < 1) {
          dateText = prevMonthLastDay + date;
        } else if (date > daysInMonth) {
          dateText = date - daysInMonth;
        } else {
          dateText = date;
        }

        return (
          <div
            className={`day ${getDayClassName(date, isCurrentMonth, isToday)}`}
            key={`${week}-${day}`}
          >
            <div className="number">{dateText}</div>
          </div>
        );
      })}
    </div>
  ));

  if (loading) return <h1>Loading....</h1>;
  if (error) return <h1>error...</h1>;

  return (
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
        {/* <Dropdown>
          <MenuButton sx={{}}>My account</MenuButton>
          <Menu>
            onClick={createHandleMenuClick("Profile")}
            <MenuItem>Profile</MenuItem>
            <MenuItem >
              Language settings
            </MenuItem>
            <MenuItem >
              Log out
            </MenuItem>
          </Menu>
        </Dropdown> */}
        {/* <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select> */}
        <select onChange={handleMonthChange}>
          <option value="jan">Jan</option>
          <option value="feb">Feb</option>
          <option value="mar">Mar</option>
          <option value="mar">Apr</option>
          <option value="apr">May</option>
          <option value="jun">Jun</option>
          <option value="jul">Jul</option>
          <option value="aug">Aug</option>
          <option value="sep">Sep</option>
          <option value="oct">Oct</option>
          <option value="nov">Nov</option>
          <option value="dec">Dec</option>
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
        <div style={{ backgroundColor: "green" }} className="buttomButtons">
          Awards
        </div>
        <div style={{ backgroundColor: "red" }} className="buttomButtons">
          Gallery
        </div>
        <div style={{ backgroundColor: "#e95c19" }} className="buttomButtons">
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
  );
}

// Calendar.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onOpen: PropTypes.func.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

export default Calendar;
