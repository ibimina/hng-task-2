import Footer from "../components/Footer"
export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>
        Hi there, contact me to ask about anything you have in mind.
        </p>
        <form>
          <div>
            <label htmlFor="first name">First Name</label>
            <input type="text" name="first name" id="first_name" />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="last_name" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <input type="checkbox" name="agree" id="" />
            <label htmlFor="agree">
              You agree to providing your data to{name} who you may contzact you
            </label>
          </div>
          <button type="submit" id="btn_submit">
            send message
          </button>
        </form>
    <Footer/>
    </div>
  );
}
