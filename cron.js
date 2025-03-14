import { CronJob } from "cron";
import https from "https";

const backendUrl = "https://diciomeunario-api.onrender.com";

// Definindo o cron job para ser executado a cada 14 minutos
const job = new CronJob("*/14 * * * *", function () {
  console.log("Attempting cron job");

  // Envia uma requisição GET para manter o backend ativo
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

// Exportando o cron job como um módulo
export { job };
