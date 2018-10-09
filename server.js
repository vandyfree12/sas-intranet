const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const utils = require('./utils/utils');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const issues = require('./routes/api/issue');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/issues', issues);

// Set the static files location.
// Serve static files
app.use(express.static(path.join(__dirname, '/dist/')));

// Catch all route.
// Return other routes to Angular index file..
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
  