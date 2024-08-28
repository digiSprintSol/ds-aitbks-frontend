import React, { useState } from "react";
import AccountantView from "./AccountantView";
import ViewDonations from "./ViewDonations";
import president4 from "./images/president4.png";

function AccountantNav() {
  const [activecount, setActivecount] = useState(0);
  // eslint-disable-next-line consistent-return
  const displayfunction = (active) => {
    // eslint-disable-next-line default-case
    switch (active) {
      case 0:
        return <AccountantView />;
      case 1:
        return <ViewDonations />;
    }
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="presidentviewhead">
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(0);
          }}
        >
          <img src={president4} alt="galleryimage" height="30px" width="30px" />
          <h5>User Payments</h5>
        </button>
        <button
          type="button"
          className="presidentviewnav"
          onClick={() => {
            setActivecount(1);
          }}
        >
          <img src={president4} alt="galleryimage" height="30px" width="30px" />
          <h5>Donations</h5>
        </button>
      </div>
      {displayfunction(activecount)}
    </div>
  );
}

export default AccountantNav;
