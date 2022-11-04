import Footer from "../components/Footer"
import "./contact.css"
export default function Contact() {
    const name ="Ibimina"
  return( 
    <div className="container">
      <div className="contact-container">
        <h2 className="contact-hd">Contact Me</h2>
        <p className="hello">Hi there, contact me to ask about anything you have in mind.</p>
        <form>
          <div className="input-con">
            <label htmlFor="first name" className="label-margin">
              First Name
            </label>
            <input
              type="text"
              name="first name"
              id="first_name"
              placeholder="Enter your first name"
              className="info"
            />
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
              className="info"
            />
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
              className="info"
            />
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
              className="info"
            ></textarea>
          </div>
          <div className="flex">
            <input type="checkbox" name="agree" className="check"/>
            <label htmlFor="agree">
              You agree to providing your data to{name} who you may contzact you
            </label>
          </div>
          <button type="submit" id="btn_submit" className="submit">
                Send message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
