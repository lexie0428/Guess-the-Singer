const express = require("express");
const useMiddleware = require("./middleware");
const usersRouter = require("./routes/users");
const answersRouter = require("./routes/answers");
const useErrorHandlers = require("./middleware/error-handlers");
const path = require('path')

const app = express();

useMiddleware(app);

app.use(express.static(`${__dirname}/build`));

// Подключаем импортированные маршруты с определенным url префиксом.
app.use("/", usersRouter);
app.use("/", answersRouter);

app.get('/*', (req, res) => {
  console.log('ffff');
  
  // res.json({res: 'hhh'})
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

useErrorHandlers(app);

module.exports = app;
