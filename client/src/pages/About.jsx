import React from "react";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* text area  */}
            <div className="hero-content">
              <p>Welcome , {user ? user.username : `to our website`}</p>
              <p>IT Services & consulting pvt ltd.</p>
              <h1>Why Choose Us</h1>
              <p>
                <br />
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends. <br />
                <br />
                Customization: We understand that every business is unique.
                That's why we create solutions that are tailored to your
                specific needs and goals. <br />
                <br />
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns. <br />{" "}
                Affordability: We offer competitive pricing without compromising
                on the quality of our services. <br />
                <br />
                <br /> Reliability: Count on us to be there when you need us.
                We're committed to ensuring your IT environment is reliable and
                available 24/7 <br />
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
            {/* hero images  */}
            <img
              src="/images/about.png"
              alt="coding together"
              width="400px"
              height="500px"
            />
          </div>
        </section>
        <Analytics />
      </main>
    </>
  );
};
