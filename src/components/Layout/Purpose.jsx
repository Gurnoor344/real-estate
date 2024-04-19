import React, { Fragment } from "react";
import PurposeItem from "../Data/PurposeItem";

import { HiOutlineHome } from "react-icons/hi";
import { FiKey } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

const Purpose = () => {
  const purposeData = [
    {
      id: "p1",
      icon: <HiOutlineHome />,
      title: "Buy A Home",
      description: "The shortest distance b/w paradise and place you call home.",
    },
    {
      id: "p2",
      icon: <FiKey />,
      title: "Rent A Home",
      description: "When you’re house hunting, you just want to move in.",
    },
    {
      id: "p3",
      icon: <FaHandshake />,
      title: "Sell A Home",
      description: "The better way to buy properties in Real Estate",
    },
  ];

  const mappedList = purposeData.map((purpose) => {
    return (
      <PurposeItem
        key={purpose.id}
        id={purpose.id}
        icon={purpose.icon}
        title={purpose.title}
        description={purpose.description}
      />
    );
  });

  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4">
            Our Main <span className="text-blue">Focus</span>
          </h1>
          <p className="text-center text-ash">
          Simplifying your home finding hassles with hundreds of luxurious properties.
          </p>
        </div>
        <ul className="flex flex-col lg:flex-row my-6">{mappedList}</ul>
      </section>
    </Fragment>
  );
};

export default Purpose;
