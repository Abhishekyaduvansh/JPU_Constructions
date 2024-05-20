import { HeartHandshake } from "lucide-react";
import { CalendarCheck2 } from "lucide-react";
import { Cctv } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { LampDesk } from "lucide-react";
import { IndianRupee } from "lucide-react";

function FeatureSection() {
  const features = [
    {
      icon: <HeartHandshake />,
      text: "Connected",
      description:
        "We well Constantly Inform you about every work we are doing and keep you Updated. ",
    },
    {
      icon: <Cctv />,
      text: "Secutiry",
      description:
        "You'll feel secure with us because we provied 360° Camera access of Site.",
    },
    {
      icon: <ShieldHalf />,
      text: "Reliability",
      description:
        "You'll Feel Reliable with us as we have done 50+ Projects so far and these numbers are increasing constantly.",
    },
    {
      icon: <CalendarCheck2 />,
      text: "In-Time",
      description:
        "We'll Finished your work within time and With your 100% satisfaction.",
    },
    {
      icon: <IndianRupee />,
      text: "Lowest Price Guaranteed",
      description:
        "Lowest Price Guarenteed or We'll match the price With Best Quality.",
    },
    {
      icon: <LampDesk />,
      text: "New Ideas",
      description:
        "We'll Provide you Ideas about every small things and Keep you Updated about everythings.",
    },
  ];
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center" id="features">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your House with Us
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
