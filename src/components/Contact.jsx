import phone from "../assets/SVG/phone.svg";
import location from "../assets/SVG/location.svg";
import time from "../assets/SVG/time.svg";

function Contact() {
  return (
    <div className=" tracking-wide py-5 border-neutral-700" id="contactUs">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Contact{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Us!!!
        </span>
      </h2>
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 bg-neutral-900 rounded-md  text-md  font-thin border border-orange-700 shadow-sm shadow-orange-400">
          <div className="bg-neutral-800 md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent  bg-clip-text bg-clip-text-600">
                Touch
              </span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industries standard dummy text
              ever since the 1500s.
            </p>

            <div className="flex items-center mt-5">
              <img src={location} alt="location" />

              <span className="text-sm">
                G.R. Boys Hostel, Madiya Road, Padao, Chandauli, U.P.
              </span>
            </div>
            <div className="flex items-center mt-5">
              <img src={phone} alt="phone" />
              <span className="text-sm">+918787095387</span>
            </div>
            <div className="flex items-center mt-5">
              <img src={time} alt="time" />
              <span className="text-sm">24*7 Availability</span>
            </div>
          </div>
          <form className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-300 text-black border-2 border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  focus:border-red-900"
                  id="grid-first-name"
                  type="text"
                  placeholder="Abhishek"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2 "
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-300 text-black border-2 border-red-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-900"
                  id="grid-last-name"
                  type="text"
                  placeholder="Yadav"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-300 text-black border-2 border-red-600  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-900"
                  id="grid-email"
                  type="email"
                  placeholder="********@gmail.com"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows="10"
                  className="appearance-none block w-full bg-gray-300 text-black border-2 border-red-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-900"
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <div className="md:flex md:items-center">
                  <label className="block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" />
                    <span className="text-sm">Send me your newsletter!</span>
                  </label>
                </div>
                <button
                  className="shadow bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded-md"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
