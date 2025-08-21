import 'dotenv/config';
import express from "express";


console.log("hello world!!!");
console.log(process.env.MY_SECRET);

console.log("PYTHON_ROOT", process.env.PYTHON_ROOT);
const app = express();

app.get("/", (req, res) => {
    res.send("Bem-vindo ao Express de Pedro");
});

app.listen(3000, () => {console.log("Example app listening")});
