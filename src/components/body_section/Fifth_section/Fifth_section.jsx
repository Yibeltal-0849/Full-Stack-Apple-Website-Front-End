import React from "react";
import "./Fifth_section.css";
import apple_tv_logo from "../../../commonResource/images/icons/apple-tv-logo.png";
import servant from "../../../commonResource/images/icons/servant-logo.png";
export default function Fifth_section() {
  return (
    <>
      {/* Fifth section starts here */}
      <section className="fith-section container-fluid">
        <div className="d-md-flex">
          <div className="left-side-wrapper col-md-6 text-center pt-4 me-md-1 my-1 my-md-0">
            <div className="mb-5">
              <img src={apple_tv_logo} alt="please enter TV logo" />
            </div>
            <div className="servant-logo pt-5 pb-5">
              <img src={servant} alt="servant logo" />
            </div>
            <div className="pt-5 film-notification">
              <a href="#">watch the trailer</a>
            </div>
          </div>
          <div className="right-side-wrapper text-center pt-4 col-md-6 mt-1 my-md-0">
            <div className="fs-1 fw-bold text-white">AirPods Pro</div>
            <div className="text-white pb-2">Magic like you’ve never heard</div>
            <div className="links-wrapper">
              <ul className="d-flex list-unstyled gap-3">
                <li>
                  <a href="#">learn more</a>
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
