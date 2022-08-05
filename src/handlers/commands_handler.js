const { SlashCommandBuilder } = require("discord.js");

module.exports = (client) => {
	if (!client.update_commands) return;

	client.application.commands.set([
		/* put your commands here */
	]);
};
