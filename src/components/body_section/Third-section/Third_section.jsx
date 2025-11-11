import React from "react";
import "./Third_section.css";
export default function Third_section() {
  return (
    <>
      <section className="third-section container-fluid">
        <div className="internal-wrapper text-center pt-4 mt-1">
          <div className="fs-1 fw-bold">iPhone 11</div>
          <div className="fs-3">Just the right amount of everything.</div>
          <div className="price my-2">
            From $16.62/mo. or $399 with trade‑in.
          </div>
          <div className="links-wrapper">
            <ul className="list-unstyled d-flex gap-3 text-primary">
              <li>
                <a href="#">learn more</a>
              </li>
              <li>
                <a href="#">buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
