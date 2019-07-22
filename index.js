const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const routes = require('./resources/users/users-route');

const server = express();
const port = process.env.PORT || 5000;
const configOptions = {
  name: 'abobby',
  secret: 'All things secret and safe',
  cookie: {
    maxAge: 1000 * 60 * 30,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(configOptions));
server.use('/api', routes);

server.listen(port, () => {
  console.log(`Server running on port:- ${port}`);
})
