const cors = require("cors");

module.exports = function (app) {
  const host = "http://localhost:3000";
  app.use(
    cors({
      origin: [
        `https://${process.env.HOST}`,
        `http://${process.env.HOST}`,
        `${host}`,
      ],
      methods: ["GET", "POST", "PUT"],
      credentials: true, // enable set cookie
    })
  );
};
