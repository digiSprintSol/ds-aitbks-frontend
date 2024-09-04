import React from "react";
import useCustomFetch from "../Hooks/useCustomFetch";

function Events() {
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const data2 = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/getEvents`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  if (data2.error) return <h1>Error..</h1>;
  if (data2.loading) return <h1>loading...</h1>;
  return (
    <div>
      <img
        src={data2.data.eventImageURL}
        loading="lazy"
        alt="homepageimage"
        height="450px"
        width="100%"
      />
    </div>
  );
}

export default Events;
