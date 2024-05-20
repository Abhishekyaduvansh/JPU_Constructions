import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  const checklistItems = [
    {
      title: "Raise a Request",
      description:
        "Either call or email us we'll connect you within a day for consultation.",
    },
    {
      title: "Book your Dream House work with us",
      description:
        "According to your requierment and you can book us for your dream house. we'll start process as soon as Customer wants.",
    },
    {
      title: "Finalise Design",
      description:
        "Finalise design and location after proper consulting with us and your family",
    },
    {
      title: "Construction works Begins",
      description:
        "As soon Design finalise we'll start working and provide you perfect desired home same as you wants with Proper Quality and best Products & Materials used.",
    },
    {
      title: "Move into your house",
      description:
        "After finising the last step for you is to check the quality before moving into you house. After proper inspecting properly you can move to your house.",
    },
  ];
  return (
    <div className="mt-20 " id="workflow">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Step by Step{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src="" alt="Construction" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
