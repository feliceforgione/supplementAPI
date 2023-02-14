const REDIS_URL = process.env.REDIS_URL || "redis";
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const { createClient } = require("redis");

let redisClient = createClient({
  legacyMode: true,
  url: `redis://${REDIS_URL}:${REDIS_PORT}`,
});

redisClient.connect().catch(console.error);

module.exports = redisClient;
