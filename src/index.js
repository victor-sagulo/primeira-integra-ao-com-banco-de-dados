import express from "express";
import { startDatabase } from "./database";
import userRouter from "./routes/user.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.get("/", (request, response) => {
  return response.json({
    message: "Hello World",
  });
});

app.listen(3333, () => {
  startDatabase();
});
