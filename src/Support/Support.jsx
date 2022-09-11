import React from "react";
import "./SupportStyle.css";
const Support = () => {
  return (
    <>
      <div className="support-container">
        <p
          style={{
            color: "white",
            paddingBottom: "5rem",
            fontSize: "30px",
            fontFamily: "Arima,cursive",
          }}
        >
          It's Totaly
          <span
            style={{
              fontSize: "38px",
              color: "orchid",
            }}
          >
            Free
          </span>
        </p>
        <button>Get Started</button>
      </div>
    </>
  );
};

export default Support;
