import React from "react";
import "./Sixth_section.css";
import new_iPad from "../../../commonResource/images/icons/new-ipad-logo.png";
import arcade from "../../../commonResource/images/icons/arcade.png";
export default function Sixth_section() {
  return (
    <>
      {/* Sixth section starts here */}
      <section className="sixth-section container-fluid">
        <div className="d-md-flex">
          <div className="left-side-wrapper text-center col-md-6 mt-1 pt-4 me-md-1">
            <div className="fs-5">16-inch model</div>
            <div className="fw-bold fs-1">MacBook Pro</div>
            <div className="fs-3 py-2">The best for the brightest.</div>
            <div className="links-wrapper">
              <ul className="list-unstyled d-flex gap-3">
                <li>
                  <a href="#">learn more</a>
                </li>
                <li>
                  <a href="#">Buy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side-wrapper col-md-6 text-center mt-1 pt-4">
            <div className="pb-1">
              <img src={new_iPad} alt="new iPad logo " />
            </div>
            <div className="py-2">Like a computer. Unlike any computer.</div>
            <div className="links-wrapper">
              <ul className="list-unstyled d-flex gap-3">
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
