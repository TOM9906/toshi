module.exports = async (client) => {
  console.log(`[Gaara Music API] Logged in as ${client.user.username}`);
  await client.user.setActivity("MUSIC WITH TOM", { // Change your bot's status here
    type: "STREAMING", //can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
