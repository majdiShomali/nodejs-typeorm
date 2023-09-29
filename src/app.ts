import * as express from "express";
import userRouter from "./routes/userRouter";

// create and setup express app
const app = express();
app.use(express.json());

// Define routes for your APIs before the catch-all route
app.use("/users", userRouter);

export default app;
