const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
//require("dotenv").config({ path: "./.env" });

// Mongo DB
const connectDB = require("./config/database");
connectDB();

// Redis
let redisClient = require("./config/redis.js");
let RedisStore = require("connect-redis")(session);
console.log("Redis is open", redisClient.isOpen);

// Routers
const homeRouter = require("./routes/home");
const medicationRouter = require("./routes/medicationRoutes");
const userRouter = require("./routes/userRoutes");

// Middleware
app.enable("trust proxy");
app.set("view engine", "ejs");
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 600000,
    },
  })
);

app.use("/api/v1", homeRouter);
app.use("/api/v1/medications", medicationRouter);
app.use("/api/v1/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`API Server is running. http://localhost:${process.env.PORT}`);
});
