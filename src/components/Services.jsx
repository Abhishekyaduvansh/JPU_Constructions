import { CheckCircle2 } from "lucide-react";

const Services = () => {
  const pricingOptions = [
    {
      title: "House Construction",
      features: [
        "360-Degree Site Access via Camera",
        "Rigorous 100+ Quality Checks for you",
        "Timely Delivery, Every Time with perfection",
        "Up to 10-Year Warranty for Your Peace of Mind",
      ],
    },
    {
      title: "Architectural Services",
      features: [
        "Unlock Savings on Your Construction Investment",
        "Expert Architects & Structural Engineers Onboard",
        "Quick Turnaround on Floor Plans, Guaranteed",
        "Exceptional Quality at Unbeatable Prices",
      ],
    },
    {
      title: "Interior Designing",
      features: [
        "Over 100 Successfully Delivered Projects",
        "Explore from Over 100 Unique Designs",
        "Competitive Pricing for Every Budget",
        "Elegantly Crafted, Affordable Homes",
      ],
    },
  ];

  return (
    <div className="mt-20 border-t py-10 border-neutral-700 " id="services">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center  tracking-wide my-10 lg:my-10">
        What We{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Provide?
        </span>
      </h2>
      <p className="text-center lg:my-10">
        We are professional team of experienced Construction Project Managers,
        Interior Designers and Architects who came together with a vision of
        making your complete home construction journey fully transparent,
        trackable and hassle free.
      </p>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>

              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center ">
                    <span className="text-orange-700">
                      {" "}
                      <CheckCircle2 />
                    </span>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
