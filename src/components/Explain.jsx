import transparancy from "../assets/SVG/Transparency.svg";
import agreement from "../assets/SVG/agreement.svg";
import time from "../assets/SVG/time_management.svg";
import construction from "../assets/SVG/under_construction.svg";
import completed from "../assets/SVG/completed.svg";
import price from "../assets/SVG/price.svg";

function Explain() {
  return (
    <div className="mt-20 tracking-wide ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Why to choose{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent  bg-clip-text">
          US?
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
          <div className="bg-neutral-900 rounded-md p-4 text-md font-thin border border-orange-700 shadow-sm shadow-orange-400 flex justify-center">
            <div className="flex flex-col mt-8 justify-center">
              <img
                src={transparancy}
                alt="Image on transparancy"
                style={{ height: 250, width: 240 }}
              />
              <div className="m-auto pt-3">
                <h6>100% TRANSPARENCY</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
          <div className="bg-neutral-900 rounded-md p-5 text-md  font-thin border border-orange-700 shadow-sm shadow-orange-400 flex justify-center">
            <div className="flex flex-col mt-8 justify-center">
              <img
                src={time}
                alt="Image on time"
                style={{ height: 250, width: 240 }}
              />
              <div>
                <h6>GUARANTEED WITHIN TIME DELIVERY</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
          <div className="bg-neutral-900 rounded-md  text-md p-5  font-thin border border-orange-700 shadow-sm shadow-orange-400 flex justify-center">
            <div className="flex flex-col mt-8 justify-center">
              <img
                src={agreement}
                alt="Image on agreement"
                style={{ height: 250, width: 240 }}
              />
              <div>
                <h6>EVERYTHING ON AGREEMENT</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
          <div className="bg-neutral-900 rounded-md  text-md  p-5 font-thin border border-orange-700 shadow-sm shadow-orange-400 flex justify-center">
            <div className="flex flex-col mt-8 justify-center">
              <img
                src={completed}
                alt="Image on transparancy"
                style={{ height: 250, width: 240 }}
              />
              <div className="m-auto">
                <h6>BEST QUALITY METERIALS</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
          <div className="bg-neutral-900 rounded-md  text-md p-5  font-thin border border-orange-700 shadow-sm shadow-orange-400 flex justify-center ">
            <div className="flex flex-col mt-8  justify-center">
              <img
                src={construction}
                alt="Image on transparancy"
                style={{ height: 250, width: 240 }}
              />
              <div>
                <h6>OUR TOP PRIORITY IS YOU SATISFACTION</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
          <div className="bg-neutral-900 rounded-md  text-md p-5  font-thin border border-orange-700 shadow-sm shadow-orange-400 flex justify-center">
            <div className="flex flex-col mt-8 justify-center">
              <img
                src={price}
                alt="Image on price"
                style={{ height: 250, width: 240 }}
              />
              <div className="m-auto">
                <h6>BEST PRICE IN MARKET</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explain;
