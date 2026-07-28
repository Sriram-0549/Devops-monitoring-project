const express = require("express");
const client = require("prom-client");

const app = express();
const port = 3001;

// Collect default Node.js metrics
client.collectDefaultMetrics();

// Create a custom metric
const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
});

// Home page
app.get("/", (req, res) => {
  httpRequests.inc();
  res.send("🚀 DevOps Monitoring Project is Running!");
});

// Metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Start server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
