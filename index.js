require('dotenv').config(); //this allows us to stash "artificial env variables" in a file

const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
