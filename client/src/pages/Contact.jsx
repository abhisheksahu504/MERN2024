import { useState } from "react";
import { useAuth } from "../store/auth";
const defaulContactForm = {
  username: "",
  email: "",
  message: "",
};
export const Contact = () => {
  const [data, setData] = useState(defaulContactForm);
  const { user, API } = useAuth();

  const [userData, setUserData] = useState(true);

  if (userData && user) {
    console.log("xyz");
    setData({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
  //handling the input fields
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setData(defaulContactForm);
        const data = await response.json();
        console.log(data);
        alert("message sent successfully");
      }
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };
  return (
    <>
      <section className="section-contact">
        <div className="conatact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        <div className="container grid grid-two-cols">
          {/* image section  */}
          <div>
            <div className="contact-image">
              <img
                src="/images/support.png"
                alt="ready to help always"
                width="500 px"
                height="500px"
              />
            </div>
          </div>
          {/* form section  */}
          <div className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  id="username"
                  required
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  required
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  value={data.message}
                  onChange={handleInput}
                  required
                  autoComplete="off"
                ></textarea>
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
