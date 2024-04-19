import React, { Fragment } from "react";

import FAQsItem from "../Data/FAQsItem";

const faqsData = [
  {
    id: "q1",
    que: "1. What the first step of the home buying process?",
    ans: "You need to know how much you can borrow. Knowing how much home you can afford narrows down online home searching to suitable properties, thus no time is wasted considering homes that are not within your budget. ",
  },
  {
    id: "q2",
    que: "2. How long does it take to buy a home?",
    ans: "From start (searching online) to finish (closing escrow), buying a home takes about 10 to 12 weeks. Once a home is selected an the offer is accepted, the average time to complete the escrow period on a home is 30 to 45 days.",
  },
  {
    id: "q3",
    que: "3. What is a buyer’s market?",
    ans: "A buyer’s market is characterized by declining home prices and reduced demand. Several factors may affect long-term and short-term buyer demand, like: Economic disruption - a big employer shuts down operations, laying off their workforce.",
  },
  {
    id: "q4",
    que: "4. What kind of credit score do I need to buy a home?",
    ans: "Most loan programs require a FICO score of 620 or better. Borrowers with higher credit scores represent less risk to the lender, often resulting in a lower the down payment requirement and better interest rate.",
  },
];

const FAQs = () => {
  const mappedList = faqsData.map((item) => (
    <FAQsItem key={item.id} id={item.id} que={item.que} ans={item.ans} />
  ));

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <h1 className="font-Poppins font-bold text-3xl text-center mb-10">
          Frequently Asked <span className="text-blue">Questions</span>
        </h1>
        <div className="lg:mx-28 mx-0">{mappedList}</div>
      </section>
    </Fragment>
  );
};

export default FAQs;
