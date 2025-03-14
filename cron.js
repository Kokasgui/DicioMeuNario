// Cron job to hit endpoint every 14 min to keep backend alive always
const cron = require("cron");
const https = require("https");

const backendUrl = "https://diciomeunario-api.onrender.com";
const job = new cron.CronJob("*/14 * * * *", function () {
  // This function will be executed every 14 minutes.
  console.log("Attempting cron job");

  // Performs an HTTPS GET request to hit any backend API
  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("Cron job worked");
      } else {
        console.error(
          `Cron job couldn't access backend. Status code: ${res.statusCode}`
        );
      }
    })
    .on("error", (err) => {
      console.error("Cron job didn't work", err.message);
    });
});

// Export the cron job
module.exports = {
  job,
};
