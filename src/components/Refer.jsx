import Contact from "./Contact";

function Refer() {
  return (
    <div className="text-center mt-10">
      <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
        Refer & Earn
      </span>
      <h3 className=" text-5xl sm:text-2xl lg:text-4xl text-center tracking-wide my-10">
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent  bg-clip-text">
          {" "}
          Suggest us to your friends & family
        </span>
      </h3>
      <p className="mt-10 text-lg text-center text-neutral-200 max-w-4xl m-auto">
        Did you got to know of your friends & family member planning to build
        their dream home.
      </p>
      “Refer them to us” & earn upto INR 50,000/- Refered Bonus.
      <Contact />
    </div>
  );
}

export default Refer;
