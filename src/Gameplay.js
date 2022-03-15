import React from "react";
function Gameplay() {
  const GamePlayArray = [
    "assets/images/Vector1.png",
    "assets/images/Vector1.png",
    "assets/images/Vector1.png",
    "assets/images/Vector1.png",
  ];
  return (
    <>
      <section className="game-play-section1">
        <img
          className="left-img"
          src="assets/images/game-play/left-img.png"
          alt=""
        ></img>
        <img
          className="right-img"
          src="assets/images/game-play/right-img.png"
          alt=""
        ></img>
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="section-heading">
                <img src="assets/images/logo.png" alt="" height="150px"></img>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {GamePlayArray.map((el, i) => (
              <div
                className="col-xl-3 col-lg-4 col-sm-6 col-md-6   d-flex justify-content-center align-items-center"
                key={i}
              >
                <div className="single-play-1" style={{ position: "relative" }}>
                  <video
                    src="./assets/video/gun.mp4"
                    width="100%"
                    autoPlay={true}
                    className="video"
                  ></video>
                  <img src={el} alt="" className="frame" />
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a href="#/" className="b-all-btn">
                Browser All <img src="assets/images/arrow.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gameplay;
