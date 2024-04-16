import { Analytics } from "../components/Analytics";
export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the best IT company</p>
              <h1>Welcome to IT Service & Consultant Pvt Ltd</h1>
              <p>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At IT Service &
                Consultant Pvt Ltd, we specialize in providing innovative IT
                services and solutions tailored to meet your unique needs.
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
              src="/images/home.png"
              alt="coding together"
              width="400px"
              height="500px"
            />
          </div>
        </section>
        {/* second section  */}
        <Analytics />
        {/* third section  */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images  */}
            <img
              src="/images/design.png"
              alt="coding together"
              width="400px"
              height="500px"
            />
            <div className="hero-content">
              <p>We are the best IT company</p>
              <h1>Welcome to IT Service & Consultant Pvt Ltd</h1>
              <p>
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how Thapa Technical can help your business thrive
                in the digital age.
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
          </div>
        </section>
      </main>
    </>
  );
};
