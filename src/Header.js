import React, { useContext, useState } from "react";
import TheTLDRHowToPlay from "./TheTLDRHowToplay";
import { Link } from "react-router-dom";
import StakModal from "./Modal";
import BankModal from "./NextModal";
import { BlockchainContext } from "./context/BlockchainContext";

function Header() {
  const { currentSignerAddress, connectWallet } = useContext(BlockchainContext);

  const [stake, setStake] = useState(false);
  const [bank, setBank] = useState(false);

  function connectWalletHandler() {
    connectWallet();
  }

  const stakeHandler = () => {
    setStake(true);
  };

  return (
    <>
      {/* <StakModal stake={stake} setStake={setStake} />*/}
      <BankModal bank={bank} setBank={setBank} />

      <div className="Header">
        <header className="header">
          <div className="overlay"></div>

          <section className="top-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="content">
                    <div className="left-content">
                      <ul className="top-social-links">
                        <li>
                          <a href="#">
                            <img src="assets/images/icon-twitter.svg" alt="#" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img src="assets/images/icon-discord.svg" alt="#" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icon-instagram.svg"
                              alt="#"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="right-content">
                      <ul className="right-list">
                        <li>
                          <div className="language-selector">
                            <select name="language" className="language">
                              <option value="1">EN</option>
                              <option value="2">IN</option>
                              <option value="3">BN</option>
                            </select>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mainmenu-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <Link to="/" className="navbar-brand">
                      <img src="assets/images/logo.png" alt=""></img>
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#main_menu"
                      aria-controls="main_menu"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse fixed-height"
                      id="main_menu"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link to="howtoplay" className="nav-link">
                            HOW TO PLAY
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="/stake"
                            // href="./Modal.js"

                            className="nav-link"
                            // data-toggle="modal"
                            // data-target="#mystake"
                          >
                            STAKE
                          </Link>
                        </li>

                        <li className="nav-item">
                          <a
                            onClick={() => setBank(true)}
                            className="nav-link"
                            data-toggle="modal"
                            data-target="#bank"
                          >
                            BANK
                          </a>
                        </li>
                      </ul>

                      {!currentSignerAddress ? (
                        <a
                          onClick={connectWalletHandler}
                          className="mybtn1"
                          // data-toggle="modal"
                          // data-target="#signin"
                        >
                          {" "}
                          CONNECT WALLET
                        </a>
                      ) : (
                        <a
                          className="mybtn1"
                          // data-toggle="modal"
                          // data-target="#signin"
                        >
                          {" "}
                          WALLET CONNECTED
                        </a>
                      )}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;