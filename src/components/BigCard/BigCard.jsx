import React from "react";

import "./BigCard.css";

const cardData = [
  {
    heading: "Attendance Dashboard",
  },
  {
    heading: "Office Productivity Compilance",
  },
  {
    heading: "Safety Compliances",
  },
];

const BigCard = () => {
  const redirectToBI = (number) => {
    if (number === 1)
      window.location.href =
        "https://app.powerbi.com/view?r=eyJrIjoiZDNjYjU2MmItYjlmYy00NWUzLWI1NjAtNjA0ZTA3YTQ2YmQzIiwidCI6IjJhNWE1NGRmLTBhOGMtNGMwYy1iMDk5LTRmNzQ3MTBkYTc1NiJ9";
    if (number === 2)
      window.location.href =
        "https://app.powerbi.com/view?r=eyJrIjoiYWJhOTc3N2MtOGNjNi00Njc1LThjMTktYjJlZmE4YzE2YzE3IiwidCI6IjJhNWE1NGRmLTBhOGMtNGMwYy1iMDk5LTRmNzQ3MTBkYTc1NiJ9";
    if (number === 3)
      window.location.href =
        "https://app.powerbi.com/view?r=eyJrIjoiNGI0Yzg3MjMtOTBhYS00MDZkLTg2ODktYjMzZmIxMmEzOTAxIiwidCI6IjJhNWE1NGRmLTBhOGMtNGMwYy1iMDk5LTRmNzQ3MTBkYTc1NiJ9";
  };
  return (
    <div
      className="row"
      style={{
        marginTop: "2rem",
      }}
    >
      {/* {cardData.map((data) => {
        return ( */}
      <div className="col-md-6">
        <div className="small-card text-center  mt-5">
          <div className="big_card bigcard1" onClick={() => redirectToBI(1)}>
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-md-12 ">
                <h1 style={{ fontSize: "1.25rem", textAlign: "left" }}>
                  {cardData[0].heading}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="col-md-6">
        <div className="small-card text-center  mt-5">
          <div className="big_card bigcard2" onClick={() => redirectToBI(2)}>
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-md-12 ">
                <h1 style={{ fontSize: "1.25rem", textAlign: "left" }}>
                  {cardData[1].heading}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}

      <div className="col-md-6">
        <div className="small-card text-center  mt-5">
          <div className="big_card bigcard1" onClick={() => redirectToBI(3)}>
            <div
              className="row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="col-md-12 ">
                <h1 style={{ fontSize: "1.25rem", textAlign: "left" }}>
                  {cardData[2].heading}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default BigCard;
