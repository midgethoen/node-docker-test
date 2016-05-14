const express = require("express");
const redis = require("redis")
const app = express();
const client = redis.createClient(6379, 'redis')

client.set('hits', 0)
app.get("/", function (req, res) {
  client.incr('hits', () => {
    client.get('hits', (err, hits) => {
      res.send(`Hello World! hit ${hits} times`);
    })
  })
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!")
});
