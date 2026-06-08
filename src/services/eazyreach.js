async function verifyEmails(people) {
  console.log("Verifying emails");

  return people.map(person => ({
    ...person,
    email:
      person.name
        .toLowerCase()
        .replace(/\s/g, ".") +
      "@example.com",
    verified: true
  }));
}

module.exports = {
  verifyEmails
};