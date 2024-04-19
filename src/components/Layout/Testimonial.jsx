import React, { Fragment } from "react";

import TestimonialItems from "../Data/TestimonialItems";

import Client1 from "../../assets/Client1.jpg";
import Client2 from "../../assets/Client2.jpg";
import Client3 from "../../assets/Client3.jpg";
import Client4 from "../../assets/Client4.jpg";

const testimonialData = [
  {
    id: "p1",
    text: "Emily was extremely knowledgeable about the local market and guided me through every step of the process with patience and expertise.",
    name: "Emily Josh",
    image: Client1,
  },
  {
    id: "p2",
    text: "He listened carefully to my needs and preferences and went above and beyond to find properties that fit my criteria.",
    name: "Robert Jack",
    image: Client2,
  },
  {
    id: "p3",
    text: "Olivia was always accessible and responsive, promptly addressing any questions or concerns I had.Her professionalism to detail gave me confidence",
    name: "Olivia Ava",
    image: Client3,
  },
  {
    id: "p4",
    text: "Noah's expertise and dedication were evident every step of the way. He took the time to truly understand our vision and priorities, ",
    name: "Noah Emma",
    image: Client4,
  },
];

const Testimonial = () => {
  const mappedList = <TestimonialItems data={testimonialData} />;
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row justify-between px-auto">
          <div>
            <h1 className="font-Poppins font-bold text-3xl text-left mb-3">
              What Our Client <span className="text-blue">Say</span>
            </h1>
            <p className="text-left text-ash">
            I found the perfect home for me at a price that fit my budget. I would highly recommend Mocha to anyone in search of a top-notch real estate site .
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row my-6">
          {mappedList}
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
