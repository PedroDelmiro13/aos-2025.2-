import "dotenv/config";
import cors from "cors";
import express from "express";
import taskRoutes from "./routes/tarefaRoutes.js";

const app = express();
app.set("trust proxy", true);

var corsOptions = {
  origin: ["http://example.com", "*"],
  optionsSuccessStatus: 200, 
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/tasks" , taskRoutes);

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});