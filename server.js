// Feito pelo Rui, o namorado da Bea Gonçalves amen

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

data = [];

const server = http.createServer((req, res) => {
  const { method, url: reqUrl } = req;
  const parseURL = url.parse(reqUrl, true);

  // Adicionando os cabeçalhos CORS para permitir acesso de diferentes origens
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permite todas as origens
  res.setHeader("Access-Control-Allow-Methods", "GET, POST"); // Métodos permitidos
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Cabeçalhos permitidos

  res.setHeader("Content-Type", "application/json");

  if (method === "GET" && parseURL.pathname == "/data") {
    res.end(JSON.stringify(data));
  } else if (method === "GET" && parseURL.pathname == "/delete") {
    data = [];
    res.end(JSON.stringify(data));
  } else if (method === "POST" && parseURL.pathname === "/data") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const newData = JSON.parse(body);
        data.push(newData);
        res.end(JSON.stringify(newData));
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not found" }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
