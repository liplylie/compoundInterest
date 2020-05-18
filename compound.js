const compound = (
  init = 10000,
  interestRate = 0.04,
  contribution = 200,
  goal = 1000000,
  annualTax = 0.22
) => {
  let growth = init;
  let month = 0;
  while (growth <= goal) {
    month += 1;
    growth = growth + growth * interestRate;
    growth = growth + contribution;

    if (month % 12 === 0) {
      // annual short term tax
      growth = growth - growth * annualTax;
    }
  }
  return { month, growth };
};
