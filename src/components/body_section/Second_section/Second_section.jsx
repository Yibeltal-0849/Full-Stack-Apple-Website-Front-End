import React from "react";
import "./Second_section.css";
export default function Second_section() {
  return (
    <>
      {/* Second section starts here */}
      <section className="second-section container-fluid">
        <div className="internal-wrapper pt-4 mt-1 text-center">
          <div className="fw-bold fs-1 pt-4">iPhone 11 Pro</div>
          <div className="fs-3 py-2">
            Pro cameras. Pro display. Pro performance.
          </div>
          <div className="price py-2">
            From $24.95/mo. or $599 with trade‑in.
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
