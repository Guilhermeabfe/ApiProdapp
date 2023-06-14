const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
server.db = router.db;
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(auth);
server.use(router);
server.use("/register", (req, res) => {});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
