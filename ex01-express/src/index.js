import 'dotenv/config';
import cors from "cors";
import express from "express";


console.log("hello world!!!");
console.log("MY_SECRET", process.env.MY_SECRET);

console.log("PYTHON_ROOT", process.env.PYTHON_ROOT);
const app = express();

app.use(cors());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
})
app.get("/", (req, res) => {
    res.send("Bem-vindo ao Express de Pedro");
});

app.get("/example", (req, res) => {
    res.send("teste");
});


app.listen(3000, () => {console.log("Example app listening")});
