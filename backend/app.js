const express = require("express");
const useMiddleware = require("./middleware");
const usersRouter = require("./routes/users");
const answersRouter = require("./routes/answers");
const useErrorHandlers = require("./middleware/error-handlers");

const app = express();

useMiddleware(app);

// Подключаем импортированные маршруты с определенным url префиксом.
app.use("/", usersRouter);
app.use("/", answersRouter);

useErrorHandlers(app);

module.exports = app;
