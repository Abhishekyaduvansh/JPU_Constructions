import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import phone from "../assets/SVG/phone.svg";
import location from "../assets/SVG/location.svg";
import time from "../assets/SVG/time.svg";

function Contact() {
  emailjs.init("SHJSIw0VI9GsOdDm5");
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    const phoneInput = form.current["user_phone"].value.trim();

  // Basic phone number validation (Indian format)
  const phoneRegex = /^[6-9]\d{9}$/;

  
 
    e.preventDefault();

    if (!phoneRegex.test(phoneInput)) {
      toast.error("Please enter a valid 10-digit phone number 📞");
      console.error(error.text);
    }
  else if (phoneInput.length !== 10) {
      toast.error("Phone number must be 10 digits long 📞")
      console.error(error.text);
    }
    else if (phoneInput.length === 10) {
      toast.success("Phone number is valid 📞")
      setIsSending(true);
      };
      
    emailjs
      .sendForm(
        "service_qytkb1c", // 🔁 Replace these
        "template_wkd5ghd",
        form.current,
        "SHJSIw0VI9GsOdDm5"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message ❌ Please try again.");
          console.error(error.text);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="tracking-wide py-5 border-neutral-700" id="contactUs">
      <ToastContainer theme="dark" position="top-center" />
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Contact{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Us!!!
        </span>
      </h2>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 bg-neutral-900 rounded-md text-md font-thin border border-orange-700 shadow-sm shadow-orange-400">
          <div className="bg-neutral-800 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                Touch
              </span>
            </h3>
            <p className="mt-4 text-gray-200">
              Got a project in mind? Whether you're planning to build your dream home,
              renovate, or need expert help — we’re here for all your construction needs.
            </p>

            <div className="flex items-center mt-5">
              <img src={location} alt="location" />
              <a
                href="https://maps.app.goo.gl/dfRC4ykDQgfK4X8J7"
                className="text-sm ml-2"
              >
                G.R. Boys Hostel, Madiya Road, Padao, Chandauli, U.P.
              </a>
            </div>
            <div className="flex items-center mt-5">
              <img src={phone} alt="phone" />
              <span className="text-sm ml-2">+91 8787095387</span>
            </div>
            <div className="flex items-center mt-5">
              <img src={time} alt="time" />
              <span className="text-sm ml-2">24*7 Availability</span>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                  Name
                </label>
                <input
                  name="user_name"
                  required
                  type="text"
                  placeholder="Abhishek yadav"
                  className="appearance-none block w-full bg-gray-300 text-black border-2 border-red-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-900"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  required
                  placeholder="1234567890"
                 
                  className="appearance-none block w-full bg-gray-300 text-black border-2 border-red-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-900"
                />
              </div>
            </div>

            <div className="w-full px-3 mb-6">
              <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                Email Address
              </label>
              <input
                name="user_email"
                required
                type="email"
                placeholder="********@gmail.com"
                className="appearance-none block w-full bg-gray-300 text-black border-2 border-red-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-900"
              />
            </div>

            <div className="w-full px-3 mb-6">
              <label className="block uppercase text-gray-500 text-xs font-bold mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows="8"
                placeholder="Tell us about your project..."
                className="appearance-none block w-full bg-gray-300 text-black border-2 border-red-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-900"
              />
            </div>

            <div className="flex justify-center w-full pt-10">
              <button
                type="submit"
                disabled={isSending}
                className="flex items-center gap-2 justify-center shadow bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-md"
              >
                {isSending ? (
                  <>
                    <span className="loader border-white border-t-transparent border-2 rounded-full w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
