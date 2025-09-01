import "dotenv/config";
import cors from "cors";
import express from "express";

console.log("Olá, Turma!");
console.log("MY_SECRET", process.env.MY_SECRET);
console.log("PYTHON_ROOT", process.env.PYTHON_ROOT);

const app = express();
app.set("trust proxy", true);

var corsOptions = {
  origin: ["http://example.com", "*"],
  optionsSuccessStatus: 200, 
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
      console.log(`${req.method} ${req.path} - ${req.ip}`);
        next();
        });


app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

app.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});