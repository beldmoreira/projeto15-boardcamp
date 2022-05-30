import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";

// import ******NOME DA ROTAA*******;

const app = express();
app.use(cors());
app.use(json());
dotenv.config();


// app.use(******NOME DA ROTAA*******);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Servidor em pé na porta ${port}`));