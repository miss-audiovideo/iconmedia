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

        <button className="quote-button">Get in touch</button>
        <div className="box"></div>
      </div>
      <style jsx>{`
        .quote h1 {
          color: #ffe462;
          text-align: center;
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
          font-weight: bold;
        }
<<<<<<< HEAD
        .box {
          margin: 0;
          position: absolute;
          top: 70%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .btnsize {
=======
        .btnsize{
          
>>>>>>> 35b2f87714d20a5f4ee3fbaa9b89d0cf8dc94578
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
