import React from "react";
import "./First-section.css";
import mac from "../../../commonResource/images/home/mac-laptop.jpg";
export default function First_section() {
  return (
    <>
      {/* First section starts here */}
      <section className="first-section container-fluid">
        <div className="internal-wrapper mt-5 text-center">
          <div className="fs-6 pt-4">16-inch model</div>
          <div className="fs-1 fw-bold my-1">MacBook Pro</div>
          <div className="fs-2">The best for the brightest.</div>
          <div className="links-wrapper">
            <ul className="d-flex gap-3 list-unstyled">
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
          <div>
            <img src={mac} alt="please insert mac laptop image" />
          </div>
        </div>
      </section>
    </>
  );
}
