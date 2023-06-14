const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const auth = require("json-server-auth");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.db = router.db;
server.use(cors());

server.use(auth);
server.use(jsonServer.bodyParser);
server.use(router);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
