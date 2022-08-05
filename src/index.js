require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
	intents: [
		/* put your intents here */
	],
});

client.ready = false;
client.update_commands = false;

client.w = "\033[0m";
client.r = "\033[31m";
client.g = "\033[32m";
client.b = "\033[34m";
client.y = "\033[33m";

client.log = (color, tag, msg) => {
	switch (color.toLowerCase()) {
		case "r":
			console.log(`${client.r}[${tag}]${client.w} ${msg}`);
			break;
		case "g":
			console.log(`${client.g}[${tag}]${client.w} ${msg}`);
			break;
		case "b":
			console.log(`${client.b}[${tag}]${client.w} ${msg}`);
			break;
	}
};

client.success = (msg) => client.log("g", "SUCCESS", msg);
client.info = (info) => client.log("b", "INFO", info);
client.err = (err) => console.trace(`${client.r}[ERROR]${client.w} ${err}`);

require("./handlers/database_handler")(client);
require("./handlers/events_handler")(client);

process.on("uncaughtException", (err) => client.err(err));

client.login(process.env.TOKEN);
