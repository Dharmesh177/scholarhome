import React, { useState } from "react";
import "./footer.css";

function Footer() {
  const [ql, setql] = useState({ "max-height": "0px" });
  const [ns, setns] = useState({ "max-height": "0px" });
  const [is, setis] = useState({ "max-height": "0px" });
  const [rs, setrs] = useState({ "max-height": "0px" });
  const [ex, setex] = useState({ "max-height": "0px" });

  return (
    <>
      <footer className="footer nav-folderized">
        <div className="container ">
          <div className=" c a address-f footer-address-main">
            <div className=" b footer-adress">
              <i class="fa fa-map-marker"></i>

              {/* <h5>India</h5> */}
              <p>
                01S09 A.M.Naik house of schol, V.V.Nagar <br />
                Anand, Gujarat 380010
              </p>
            </div>
            <div className="b footer-awards">
              <h5>Contact Us</h5>
              <div class="footer-center">
                <div>
                  <i class="fa fa-phone"></i>
                  <p style={{ margin: "auto" }}>+91 9309090932</p>
                </div>
                <div>
                  <i class="fa fa-envelope"></i>
                  <p>
                    <a href="mailto:support@company.com">Scholar@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="b footer-social home-social">
              <h5>Follow us on</h5>

              <ul class="footer-icons">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12">
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (ql["max-height"] == "0px") {
                    setql({ "max-height": "100%" });
                  } else {
                    setql({ "max-height": "0px" });
                  }
                }}
              >
                Quick Links
              </h5>
              <ul style={ql}>
                <li>
                  <a href="aboutus.shtml" className="lear-more-l">
                    Home
                  </a>
                </li>
                <li>
                  <a href="testimonials.shtml" className="lear-more-l">
                    Testimonials
                  </a>
                </li>
                <li className="hiring-link blink-menu">
                  <a href="career.shtml" className="lear-more-l blink-active">
                    Admin Login
                  </a>{" "}
                  <span className="hiring">We Are Hiring</span>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="faqs.shtml" className="lear-more-l">
                    Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (ns["max-height"] == "0px") {
                    setns({ "max-height": "100%" });
                  } else {
                    setns({ "max-height": "0px" });
                  }
                }}
              >
                National Scholarships
              </h5>
              <ul style={ns}>
                <li>
                  <a href="#" className="lear-more-l">
                    State Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    Central Scholarships
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    Private Scholarship
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    Compititive Exam <br /> based Scholarships
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (is["max-height"] == "0px") {
                    setis({ "max-height": "100%" });
                  } else {
                    setis({ "max-height": "0px" });
                  }
                }}
              >
                international Scholarships
              </h5>
              <ul style={is}>
                <li>
                  <a href="#" className="lear-more-l">
                    Study at Jermany
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    Study at Us
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    Study at Ukraine
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    Study at Canada
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    Study at Rusia
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (rs["max-height"] == "0px") {
                    setrs({ "max-height": "100%" });
                  } else {
                    setrs({ "max-height": "0px" });
                  }
                }}
              >
                Research Fellowships
              </h5>
              <ul style={rs}>
                <li>
                  <a href="#" className="lear-more-l">
                    PMRF Fellowship
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    TARE Fellowship
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    JNFF Fellowship
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    Google Phd Fellowship
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    ICMR Fellowship
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-link ftr__list nav">
              <h5
                onClick={() => {
                  if (ex["max-height"] == "0px") {
                    setex({ "max-height": "100%" });
                  } else {
                    setex({ "max-height": "0px" });
                  }
                }}
              >
                Exams
              </h5>
              <ul style={ex}>
                <li>
                  <a href="#" className="lear-more-l">
                    NDA
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    SSB
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    GATE
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    KVPY
                  </a>
                </li>
                <li>
                  <a href="#" className="lear-more-l">
                    JEE
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 copy-right text-center">
            <p>
              <a
                href="https://www.dmca.com/Protection/Status.aspx?ID=b77fb9ca-2075-44ae-9d84-a87cbe917c18&amp;refurl=#9"
                title="DMCA.com Protection Status"
                className="dmca-badge"
              >
                <img
                  src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-03.png?ID=b77fb9ca-2075-44ae-9d84-a87cbe917c18"
                  alt="DMCA.com Protection Status"
                  width="100"
                  height="20"
                />
              </a>
              <span>
                © 2022
                <a href="#" target="_new">
                  {" "}
                  Scholar{" "}
                </a>
                All rights reserved.
              </span>
            </p>
          </div>
        </div>
      </footer>

      <script src="../js/start.js"></script>
      <script src="../js/mmenu-light.js"></script>
    </>
  );
}

export default Footer;
