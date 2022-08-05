const { connect } = require("mongoose");

module.exports = (client) => {
	connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(async () => {
			client.success("Baza de date conectata!");
			client.ready = true;
		})
		.catch((err) => {
			client.err(err);
			client.ready = false;
		});
};
