async function findDecisionMakers(companies) {
  console.log("Finding founders and CEOs");

  return [
    {
      company: companies[0],
      name: "Harpreet Gill",
      title: "Founder"
    },
    {
      company: companies[1],
      name: "Yaron",
      title: "CEO"
    }
  ];
}

module.exports = {
  findDecisionMakers
};