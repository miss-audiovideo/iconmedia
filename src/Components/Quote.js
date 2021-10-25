import React from "react";
import Button from "./Buttons";
import Image from "./images/c.png";
function Quote() {
  return (
    <>
      <div className="quote animate__animated animate__bounce animate__delay-3s">
        <h1 className="animate__animated animate__zoomIn animate__infinite animate__slower">
          Let's create a measurable
          <br />
          impact on your business.
        </h1>
        <Button
          className="quote-button btn btn-outline-warning"
          style={{ fontFamily: "Futura-Medium,sans-serif" }}
        >
          Design a quote
        </Button>
      </div>
      <style jsx>{`
        .quote h1 {
          color: #ffe462;
          text-align: center;
          font-family: "Futura-Medium", sans-serif !important;
        }
        .quote {
          height: 500px;
          display: flex;
          background-image: url(${Image});
          background-size: cover;
          background-position: center;

          flex-direction: column;
          justify-content: center;
        }
        .quote-button {
          background-color: #2d0707;
          color: #ffe462;
          padding: 10px;
          margin-top: 20px;
          margin-right: auto;
          margin-left: auto;
          border-radius: 5px;
          border: 2px solid #ffe462;
          // font-weight: bold;
          font-family: "Futura-Book", sans-serif !important;
        }
        .box {
          margin: 0;
          position: absolute;
          top: 70%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .btnsize {
          width: 205px;
        }
        .quotes-button {
        }
        @media screen and (max-width: 500px) {
          .quote h1 {
            font-size: 35px;
          }
        }
      `}</style>
    </>
  );
}

export default Quote;
