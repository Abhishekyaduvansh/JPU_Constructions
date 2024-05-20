import { Link as LinkRouter } from "react-router-dom";

const Footer = () => {
  const platformLinks = [
    { href: "/", text: "Home" },
    { href: "/Features", text: "Feature" },
    { href: "/Testimonials", text: "Testimonials" },
    { href: "/Workflow", text: "Workflow" },
    { href: "/ContactUs", text: "Contact us" },
  ];
  const importantLinks = [
    { href: "/PrivacyPolicy", text: "Privacy Policy" },
    { href: "/TermsAndConditions", text: "Terms & Conditions" },
    { href: "/Refer", text: "Refer & Earn" },
  ];

  const contactLinks = [
    {
      href: "https://wa.me/+918787095387",
      text: "Whatsapp",
    },
    {
      href: "tel:+918787095387",
      text: "Direct call",
    },
    {
      href: "mailto:Constructionjpu@gmail.com",
      text: "Email",
    },
    {
      href: "#",
      text: "Facebook",
    },
    {
      href: "https://www.instagram.com/j.p.u_constructions",
      text: "Instagram",
    },
  ];
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="px-4">
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent  bg-clip-text">
            About us
          </h3>
          <p className="text-neutral-300 hover:text-white ">
            We are professional team of experienced Construction Project
            Managers, Interior Designers and Architects who came together with a
            vision of making your complete home construction journey fully
            transparent, trackable and hassle free.
          </p>
        </div>
        <div className="mx-7">
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent  bg-clip-text">
            Platform
          </h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                <LinkRouter
                  to={link.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </LinkRouter>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent  bg-clip-text">
            Contact
          </h3>
          <ul className="space-y-2">
            {contactLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                  target="_blank"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent  bg-clip-text">
            Important!
          </h3>
          <ul className="space-y-2">
            {importantLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                <LinkRouter
                  to={link.href}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </LinkRouter>
              </li>
            ))}
          </ul>
          <div className="flex flex-row"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
