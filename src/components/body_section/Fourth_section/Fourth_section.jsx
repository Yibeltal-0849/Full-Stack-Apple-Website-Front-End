import React from "react";
import "./Fourth_section.css";
import card from "../../../commonResource/images/icons/apple-card-logo.png";
import watch from "../../../commonResource/images/icons/watch-series5-logo.png";

export default function Fourth_section() {
  return (
    <>
      {/* Fourth section starts here */}
      <section className="fourth-section container-fluid">
        <div className="d-md-flex">
          {/* <!-- Left side wrapper --> */}
          <div className="left-side-wrapper col-md-6 my-1 mx-md-1 text-center pt-4">
            <div className="mb-3">
              <img src={watch} alt="please insert watch logo" />
            </div>
            <div className="mb-3">
              <p>With the new Always-On Retina display.</p>
              <p>You’ve never seen a watch like this.</p>
            </div>
            <div className="links-wrapper">
              <ul className="list-unstyled d-flex gap-3">
                <li>
                  <a href="#">Learn more</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right side wrapper --> */}
          <div className="right-side-wrapper col-md-6 text-center me-md-1 pt-4 mt-1">
            <div className="mb-3">
              <img src={card} alt="please insert card is here logo" />
            </div>
            <div className="mb-3">
              <p>Get 3% Daily Cash on purchases from</p>
              <p>Apple using Apple Card.</p>
            </div>
            <div className="links-wrapper">
              <ul className="list-unstyled d-flex gap-3">
                <li>
                  <a href="#">Learn more</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
