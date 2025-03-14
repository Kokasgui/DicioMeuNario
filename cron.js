const { CronJob } = require("cron");
const https = require("https");

// Define qual é o backend em questão
const backendUrl = "https://diciomeunario-api.onrender.com/data";

const job = new CronJob("*/14 * * * *", function () {
  console.log("A tentar cron job");

  https
    .get(backendUrl, (res) => {
      if (res.statusCode === 200) {
        console.log("O cron job funcionou!");
      } else {
        console.error(
          `O cron job não conseguiu aceder ao backend. Código de erro ${res.statusCode}`
        );
      }
    })
    .on("error", (err) => {
      console.error("O cron job deu erro", err.message);
    });
});

module.exports = { job };
