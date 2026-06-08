async function sendCampaign(contacts) {
  console.log(
    `Sending campaign to ${contacts.length} contacts`
  );

  return true;
}

module.exports = {
  sendCampaign
};