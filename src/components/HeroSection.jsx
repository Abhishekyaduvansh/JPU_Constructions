import Contact from "./Contact";
import FeatureSection from "./FeatureSection";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Workflow from "./Workflow";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Link as RouterLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-3 lg:mt-10 " id="/">
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide my-1">
          Welcome to
        </h1>
        <h1 className=" text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent  bg-clip-text">
            {" "}
            JPU Constructions & Interiors
          </span>
           
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl m-auto">
        {/* *Crafting Quality, Constructing Future.<br />
          * Building Dreams, One Brick at a Time. <br />  
          * Your Vision, Our Mission. <br />
          * Building Tomorrow, Today. <br />
          * Transforming Spaces, Creating Memories. <br /> 
           * Excellence in Every Detail. <br />
           * Where Quality Meets Craftsmanship. <br />
           * Building Dreams with Precision. <br />
           * Your Trusted Partner in Construction.  <br />
          * Building the Future, One Project at a Time. <br />
          * Your Dream Home Awaits. <br />
           * Building Trust, One Project at a Time. <br />
           * Constructing Excellence, One Brick at a Time. <br /> */}
          {/* Your Vision, Our Blueprint. */}
          Welcome to JPU Construction, where your dream home begins to take
          shape. With a passion for precision and an eye for detail, we
          specialize in turning your vision into reality. From cozy cottages to
          modern marvels, our team of experts is dedicated to delivering
          excellence in every brick and beam. Explore our portfolio and let us
          inspire you to build the home you have always imagined. Welcome to a
          world of endless possibilities in house construction.
        </p>

        <div className="mt-10">
          <RouterLink
            to="/ContactUs"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
              Contact Us
            </button>
          </RouterLink>

          <a href="/" className="py-2 px-3 border rounded-md mx-5">
            Know More
          </a>
        </div>
        <div className="flex mt-10 lg:mt-20 justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2  border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <FeatureSection />
      <Workflow />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};
export default HeroSection;
