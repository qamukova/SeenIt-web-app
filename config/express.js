global.__basedir = __dirname;

const path = require('path');
const express = require('express');
const config = require('./config');
const usersRouter = require('./routers/user');
const postsRouter = require('./routers/posts');
const commentsRouter = require('./routers/comments');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const globalErrorHandler = require('../global-error-handler');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'static/seenIt-ref')));
app.use(cookieParser());
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

// в responce връща всички полета без password
app.set('json replacer', (key, value) => {
   if (key === 'password') { return undefined; }
   return value;
});

app.use('*', function (req, res) {
    const index = path.resolve(__dirname, 'static', 'seenIt-ref', 'index.html');
    res.sendFile(index);
});
app.use(globalErrorHandler);

app.listen(config.port, () => {
    console.log(`Server: Listening on ${config.port}`);
});