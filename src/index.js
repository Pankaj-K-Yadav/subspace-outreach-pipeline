require("dotenv").config();

const readline = require("readline-sync");

async function main() {

    const domain = readline.question(
        "Enter company domain: "
    );

    console.log(
        `Seed Domain: ${domain}`
    );
}

main();