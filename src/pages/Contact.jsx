import { useState } from "react";
import Footer from "../components/Footer";
import "./contact.css";
export default function Contact() {
  const [nam, setNam] = useState(false);
  const [las, setLas] = useState(false);
  const [ema, setEma] = useState(false);
  const [mes, setMes] = useState(false)
  const initial = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };

  const [checkBox, setCheckBox] = useState(false);
  const [formValues, setFormValues] = useState(initial);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value.trim() });

    if (e.target.name === "firstname") {
      setNam(false);
    }
    if (e.target.name === "lastname") {
      setLas(false);
    }
    if (e.target.name === "message") {
      setMes(false);
    }
    if (e.target.name === "email") {
      setEma(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.firstname === "") {
      setNam(true);
    }
    if (formValues.lastname === "") {
      setLas(true);
    }
    if (formValues.email === "") {
      setEma(true);
    }
    if (formValues.message === "") {
      setMes(true);
    }
    if (
      formValues.firstname &&
      formValues.message &&
      formValues.email &&
      formValues.lastname&&checkBox===true
    ) {
      alert("successful")
      setFormValues(initial)
      setCheckBox(false)
    }
  };

  const name = "Ibimina";
  return (
    <div className="container">
      <div className="contact-container">
        <h2 className="contact-hd">Contact Me</h2>
        <p className="hello">
          Hi there, contact me to ask about anything you have in mind.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="name-flex">
            <div className="input-con">
              <label htmlFor="first name" className="label-margin">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="first_name"
                placeholder="Enter your first name"
                className={`info ${nam === true ? "inputerror" : ""}`}
                value={formValues.firstname}
                onChange={handleChange}
              />

              <p className={`none ${nam === true ? "nameerror" : ""}`}>
                please enter your first name
              </p>
            </div>
            <div className="input-con">
              <label htmlFor="lastname" className="label-margin">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="last_name"
                placeholder="Enter your last name"
                className={`info ${las === true ? "inputerror" : ""}`}
                value={formValues.lastname}
                onChange={handleChange}
              />
              <p className={`none  ${las === true ? "nameerror" : ""}`}>
                please enter your last name
              </p>
            </div>
          </div>

          <div className="input-con">
            <label htmlFor="email" className="label-margin">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="yourname@email.com"
              className={`info ${ema === true ? "inputerror" : ""}`}
              value={formValues.email}
              onChange={handleChange}
            />
            <p className={`none ${ema === true ? "nameerror" : ""}`}>
              Please enter your email
            </p>
          </div>
          <div className="input-con">
            <label htmlFor="message" className="label-margin">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Send me a message and I'll reply you as soon as possible"
              className={`info ${nam === true ? "inputerror" : ""}`}
              value={formValues.message}
              onChange={handleChange}
            ></textarea>
            <p className={`none ${mes === true ? "nameerror" : ""}`}>
              please enter your message
            </p>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              name="agree"
              className="check"
              checked={checkBox}
              onChange={() =>
                checkBox === false ? setCheckBox(true) : setCheckBox(false)
              }
            />
            <label htmlFor="agree" className="agree">
              You agree to providing your data to {name} who you may contact you
            </label>
          </div>
          <button
            type="submit"
            id="btn__submit"
            className="submit"
            // disabled={
            //   formValues.firstname !== "" &&
            //   formValues.lastname !== "" &&
            //   formValues.message !== "" &&
            //   checkBox !== false
            //     ? false
            //     : true
            // }
          >
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
