const { CronJob } = require("cron");
const https = require("https");

const backendUrl = "https://diciomeunario-api.onrender.com/data";

const job = new CronJob("*/14 * * * *", function () {
  console.log("Attempting cron job");

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

module.exports = { job };
