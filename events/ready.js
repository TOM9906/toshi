module.exports = async (client) => {
  console.log(`[Gaara Music API] Logged in as ${client.user.username}`);
  await client.user.setActivity("TOM with 69 other", { // Change your bot's status here
    type: "STREAMING", //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
