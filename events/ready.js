module.exports = async (client) => {
  console.log(`[Gaara Music API] Logged in as ${client.user.username}`);
  await client.user.setActivity("HBD ANKIT", { // Change your bot's status here
    type: "PLAYING", //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
