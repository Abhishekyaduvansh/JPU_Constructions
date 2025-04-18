import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/Profile-picture/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "features" },
    { label: "Workflow", href: "workflow" },
    { label: "Services", href: "services" },
    { label: "Testimonials", href: "testimonials" },
  ];
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
        <a href="/" className="flex items-center flex-shrink-0 ">
            <img className="h-10 w-20 mx-5" src={logo} alt="" />
            <span className="text-xl tracking-tight bg-gradient-to-r from-orange-500 to-red-800 text-transparent  bg-clip-text">
              JPU Constructions & Interiors
            </span>
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                <Link
                  to={item.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* <a href="#" className="py-2 px-3 border rounded-md">
              Check Out
            </a> */}
            <Link
              to="contactUs"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <button className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 mx-auto cursor-pointer">
                  <Link
                    to={item.href}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-3">
              <a href="#" className="py-2 px-3 border rounded-md">
                More
              </a>
              <Link
                to="contactUs"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <button className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
