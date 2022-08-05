module.exports = {
	name: "ready",
	once: true,
	run: (client) => {
		require("../handlers/commands_handler")(client);

		client.success(`${client.user.tag} este online!`);
	},
};
