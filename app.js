const express = require("express");
const path = require("path");
const redisCache = require("redis");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);
const usersRoute = require("./routes/users");
const focultiesRoute = require("./routes/foculties");
const subjectsRoute = require("./routes/subjects");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(helmet());
let redisClient = redisCache.createClient();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(cookieParser());
app.use((req, res, next) => {
  console.log(req);
  res.header("Access-control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use(
  session({
    saveUninitialized: false,
    store: new RedisStore({ client: redisClient }),
    secret: "keyboard cat",
    resave: false,
    cookie: {
      maxAge: 86400000,
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "strict",
    },
  })
);

app.use("/api/users", usersRoute);
app.use("/api/foculties", focultiesRoute);
app.use("/api/subjects", subjectsRoute);

app.use("*", (req, res, next) => {
  return res.status(404).json({ error: "404 Not Found" });
});

app.listen(4444, "localhost", () => {
  console.log("server is running on port 4444");
});
