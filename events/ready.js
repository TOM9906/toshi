module.exports = async (client) => {
  console.log(`[Gaara Music API] Logged in as ${client.user.username}`);
  await client.user.setActivity("WITH TOM ", { // Change your bot's status here
    type: "LISTENING", //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
