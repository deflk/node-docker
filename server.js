const mocks = require('ronin-mocks');
const ronin = require('ronin-server');
const database = require('ronin-database');

const server = ronin.server();

database.connect(process.env.CONNECTIONSTRING);

server.use('/foo', (req, res) => {
    return res.json({ "foo": "bar" });
});

server.use('/', mocks.server(server.Router(), false, false));
server.start();