require("dotenv").config();

const readline = require("readline-sync");

const {
  findSimilarCompanies
} = require("./services/ocean");

const {
  findDecisionMakers
} = require("./services/prospeo");

const {
  verifyEmails
} = require("./services/eazyreach");

const {
  sendCampaign
} = require("./services/brevo");

async function main() {

  const domain = readline.question(
    "Enter company domain: "
  );

  console.log("\nSTEP 1");

  const companies =
    await findSimilarCompanies(domain);

  console.log(companies);

  console.log("\nSTEP 2");

  const people =
    await findDecisionMakers(companies);

  console.table(people);

  console.log("\nSTEP 3");

  const verified =
    await verifyEmails(people);

  console.table(verified);

  console.log("\nSAFETY CHECK");

  const confirmation =
    readline.question(
      "Send outreach emails? (yes/no): "
    );

  if (
    confirmation.toLowerCase() !== "yes"
  ) {
    console.log(
      "Campaign cancelled."
    );
    return;
  }

  console.log("\nSTEP 4");

  await sendCampaign(verified);

  console.log(
    "\nPipeline completed successfully."
  );
}

main().catch(error => {
  console.error(
    "Pipeline failed:",
    error.message
  );
});