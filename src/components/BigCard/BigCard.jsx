import React from "react";
import Image1 from "../../images/Rectangle 44673.png";
import Image2 from "../../images/Rectangle 44674.png";
import Image3 from "../../images/Rectangle 44673.png";
import "./BigCard.css";

const cardData = [
  {
    src: "https://s3-alpha-sig.figma.com/img/b051/fdf5/fee51b9a859ee1a53222e9010d1d8e56?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DNsRubxwJPAfa5OvuCHIWcYV9MIFi9hS1v31lKwJGs3i~uA3WxLnqRaLfqs7e8GIMfz0fe2nW9FMuB191jIl7XYI6rLu-v0vocjbuP6zaxeXCSf0yNbCo-yaiewld3F0fMOWNDxfejw7iUS-Linr21QI3dI-EMGRxcd86wUnij~uD~lyWTB40nYpnVVeXCLNN6kllhtIy84r~PDfhOgyeU2cM47SE2CTYcTmSEUfYMHzydhA7YhG~5-uKZPfmYRDQK3JXsKcbFZVuOpxEbe7HMAaefHgQDeK1E9ibFxy2buy5S~KCxrCxusFbDYU33AC6GOBI8Dr2zAVuaU-B7qLzQ__",
    heading: "Attendance Dashboard",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/b051/fdf5/fee51b9a859ee1a53222e9010d1d8e56?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DNsRubxwJPAfa5OvuCHIWcYV9MIFi9hS1v31lKwJGs3i~uA3WxLnqRaLfqs7e8GIMfz0fe2nW9FMuB191jIl7XYI6rLu-v0vocjbuP6zaxeXCSf0yNbCo-yaiewld3F0fMOWNDxfejw7iUS-Linr21QI3dI-EMGRxcd86wUnij~uD~lyWTB40nYpnVVeXCLNN6kllhtIy84r~PDfhOgyeU2cM47SE2CTYcTmSEUfYMHzydhA7YhG~5-uKZPfmYRDQK3JXsKcbFZVuOpxEbe7HMAaefHgQDeK1E9ibFxy2buy5S~KCxrCxusFbDYU33AC6GOBI8Dr2zAVuaU-B7qLzQ__",
    heading: "Attendance Dashboard",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/b051/fdf5/fee51b9a859ee1a53222e9010d1d8e56?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DNsRubxwJPAfa5OvuCHIWcYV9MIFi9hS1v31lKwJGs3i~uA3WxLnqRaLfqs7e8GIMfz0fe2nW9FMuB191jIl7XYI6rLu-v0vocjbuP6zaxeXCSf0yNbCo-yaiewld3F0fMOWNDxfejw7iUS-Linr21QI3dI-EMGRxcd86wUnij~uD~lyWTB40nYpnVVeXCLNN6kllhtIy84r~PDfhOgyeU2cM47SE2CTYcTmSEUfYMHzydhA7YhG~5-uKZPfmYRDQK3JXsKcbFZVuOpxEbe7HMAaefHgQDeK1E9ibFxy2buy5S~KCxrCxusFbDYU33AC6GOBI8Dr2zAVuaU-B7qLzQ__",
    heading: "Safety Compliances",
  },
];

const BigCard = () => {
  const redirectToBI = () => {
    window.location.href =
      "https://app.powerbi.com/view?r=eyJrIjoiZDNjYjU2MmItYjlmYy00NWUzLWI1NjAtNjA0ZTA3YTQ2YmQzIiwidCI6IjJhNWE1NGRmLTBhOGMtNGMwYy1iMDk5LTRmNzQ3MTBkYTc1NiJ9";
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
          <div className="big_card bigcard1" onClick={redirectToBI}>
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
          <div className="big_card bigcard2" onClick={redirectToBI}>
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
          <div className="big_card bigcard1" onClick={redirectToBI}>
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
