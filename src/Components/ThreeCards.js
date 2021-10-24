import React from "react";
import Image from "./Video/default-image.png";

import HoverVideoPlayer from 'react-hover-video-player';


const ThreeCards = (props) => {
  return (
    <>
      <div className={props.class}>
        {/* <video
          src={props.src.first}
          alt="video_source"
          className="card_img img_one"
        /> */}
        <img className="card_img img_one animate__animated animate__pulse animate__slower animate__infinite" src={props.src.first} alt="" srcset="" />
        <HoverVideoPlayer
            videoSrc={props.src.second}
            className="card_img img_two"
            restartOnPaused
            muted={false}
            pausedOverlay={
              <img
                src={props.src.third}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            }
          />
          {/* <HoverVideoPlayer
            videoSrc={props.src.third}
            className="card_img "
            restartOnPaused
            muted={false}
            pausedOverlay={
              <img
                src={Image}
                alt=""
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: "100%",
                  height: "100%",
                  objectFit: "",
                }}
              />
            }
          /> */}
          <img className="card_img img_one animate__animated animate__pulse animate__slower animate__infinite" src={props.src.first} alt="" srcset="" />
      </div>
    </>
  );
};

export default ThreeCards;
