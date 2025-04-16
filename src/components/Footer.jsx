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
    { href: "https://wa.me/+918787095387", text: "Whatsapp" },
    { href: "tel:+918787095387", text: "Direct call" },
    { href: "mailto:Constructionjpu@gmail.com", text: "Email" },
    { href: "#", text: "Facebook" },
    { href: "https://www.instagram.com/j.p.u_constructions", text: "Instagram" },
  ];

  return (
    <footer className="ml-10 mr-10 mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* About Us */}
        <div>
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            About us
          </h3>
          <p className="text-neutral-300 hover:text-white">
            We are a professional team of experienced Construction Project Managers, Interior Designers, and Architects with a vision of making your complete home construction journey fully transparent, trackable, and hassle-free.
          </p>
        </div>

        {/* Platform Links */}
        <div className="mx-7">
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Platform
          </h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                <LinkRouter
                  to={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </LinkRouter>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Contact
          </h3>
          <ul className="space-y-2">
            {contactLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Important!
          </h3>
          <ul className="space-y-2">
            {importantLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                <LinkRouter
                  to={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </LinkRouter>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Developer Info */}
      <div className="flex flex-col mt-16 text-neutral-300 text-sm">
        <h3 className="text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Developer Info
        </h3>
        <p className="mb-4">
          Designed & Developed by{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Abhishek Yadav
          </span>
          <br />
          Contact me for any queries or suggestions. I'm always open to new
          opportunities and collaborations. Let's connect and build something
          amazing together!
        </p>

        <p className="mb-4">
          Feel free to reach out to me through any of the platforms below:
        </p>

        <ul className="space-y-2">
          <li>
            <a
              href="https://wa.me/+919140954440"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 Whatsapp Me
            </a>
          </li>
          <li>
            <a
              href="mailto:abhishekyaduvansh0@gmail.com"
              className="hover:text-white"
            >
              📧 Mail Me
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Abhishekyaduvansh"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 My Github
            </a>
          </li>
        </ul>

        {/* Footer Bottom Line */}
        <div className="border-t border-neutral-700 mt-10 pt-6 text-center text-neutral-500 text-xs">
          © {new Date().getFullYear()} Abhishek Yadav. Built with ❤️ in 2024.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
