import user1 from "../assets/Profile-picture/Uttam_Singh.jpg";
import user2 from "../assets/Profile-picture/user2.jpg";
import user3 from "../assets/Profile-picture/user3.jpg";
import user4 from "../assets/Profile-picture/user4.jpg";
import user5 from "../assets/Profile-picture/user5.jpg";
import user6 from "../assets/Profile-picture/user6.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      user: "Uttam singh",
      company: "Varanasi, UP",
      image: user1,
      text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations. I was Hoping for good but the outcome was best.",
    },
    {
      user: "Sumit tiwari",
      company: "Araurah, UP",
      image: user2,
      text: "I couldn't be happier with the outcome of our House. The team's creativity and Hard working skills were instrumental in bringing our vision to life. The team working on out house were so good and proficient.",
    },
    {
      user: "Arun singh",
      company: "Pt. Din Dayal Upadhyay, UP",
      image: user3,
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
      user: "Deepak mishra",
      company: "Chunar, UP",
      image: user4,
      text: " Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
      user: "Rajnish Pathak",
      company: "Gopalganj, Bihar",
      image: user5,
      text: "It was Exceptionally good from map to materials used. They were able to exceed our expectations and deliver outstanding results.I'll directly connect to them without a single thought for future.",
    },
    {
      user: "Ashutosh Singh baghel",
      company: "Lucknow, UP",
      image: user6,
      text: "The team went above and beyond to ensure our interior project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    },
  ];

  return (
    <div
      className="mt-20 tracking-wide border-t border-b py-10 border-neutral-700"
      id="testimonials"
    >
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Saying
        </span>
      </h2>
      <div className="flex flex-wrap justify-center ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
            <div className="bg-neutral-900 rounded-md p-6 text-md  font-thin border border-orange-700 shadow-sm shadow-orange-400">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
