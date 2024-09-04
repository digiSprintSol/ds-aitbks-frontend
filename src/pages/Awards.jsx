import React from "react";
import useCustomFetch from "../Hooks/useCustomFetch";

function Awards() {
  const token = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MiLCJ1c2VyTmFtZSI6InBycEAxMjM0IiwidXNlcklkIjoicHJwQDEyMzQiLCJ0eXBlIjoicHJwMTIzIiwiYWNjZXNzIjpbIlBSRVNJREVOVCIsIkFDQ09VTlRBTlQiLCJDT01NSVRFRSJdLCJpYXQiOjE3MjI2Nzc5MTMsImV4cCI6MTcyMjY4MTUxM30.AaNa6tYcSLCUIhzqMSmdqkqO9OArVU3DaPZkD5tTHK8`;
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/award-urls`,
    method: "GET",
    headers: {
      Token: token,
    },
  });

  if (error) return <h1>No data found...</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "30px 0px",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        {data.map((item) => (
          <img
            src={item.awardImageURL}
            alt="galleryimage"
            height="250vw"
            width="380vw"
          />
        ))}
      </div>
    </div>
  );
}

export default Awards;
