const server = require("express")();
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	server.get("/p/:id", (req, res) => {
		app.render(req, res, "/post", { id: req.params.id });
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(3000, (err) => {
		if (err) throw err;
		console.log("> server is running on port:3000");
	});
});
