import React, { useState } from "react";
import AccountantView from "./AccountantView";
import ViewDonations from "./ViewDonations";
import accountant1 from "./images/accountant1.png";
import accountant2 from "./images/accountant2.png";

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
      <div className="accountanthead" style={{ marginLeft: "35vw" }}>
        <button
          type="button"
          className="accountantheadinside"
          onClick={() => {
            setActivecount(0);
          }}
        >
          <img
            src={accountant1}
            alt="galleryimage"
            height="30px"
            width="30px"
            style={{ transform: "Translate(0,0.6vw)" }}
          />
          <h5>User Payments</h5>
        </button>
        <button
          type="button"
          className="accountantheadinside"
          onClick={() => {
            setActivecount(1);
          }}
        >
          <img
            src={accountant2}
            alt="galleryimage"
            height="35px"
            style={{ marginTop: "0.7vw" }}
            width="30px"
          />
          <h5>Donations</h5>
        </button>
      </div>
      {displayfunction(activecount)}
    </div>
  );
}

export default AccountantNav;
