import React from "react";
function Maindiv() {
  return (
    <>
      <div className="hero-area">
        <img
          className="shape parallax5"
          src="assets/images/home/h2-shape.png"
          alt=""
        ></img>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <div className="content">
                  <h1 className="title"></h1>
                  <div className="links"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="counter-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="counter-box">
                <div className="content">
                  <h4>
                    The year is 3023, the four families of organized crime
                    control the fate of planet Kratos. With an iron grip on the
                    spice trade, they rule with ruthless force. But invasion
                    looms on the horizon in the form of the Terran Privateer
                    syndicate. Will the families be able to put aside
                    generations of war or be overrun by outsiders?
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Maindiv;