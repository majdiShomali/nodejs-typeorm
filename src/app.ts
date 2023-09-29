import * as express from "express";
import { Request, Response } from "express";
import { user } from "./entity/user.entity";
import { myDataSource } from "./app-data-source";
// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

// create and setup express app
const app = express();
app.use(express.json());

// register routes
app.get("/users", async function (req: Request, res: Response) {
  try {
    const users = await myDataSource.getRepository(user).find();
    res.json(users);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal server error");
  }
});

app.get("/users/:id", async function (req: Request, res: Response) {
  try {
    const results = await myDataSource.getRepository(user).findOneBy({
      id: req.params.id,
    });

    if (!results) {
      return res.status(404).send("User not found");
    }
    return res.send(results);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal server error");
  }
});

app.post("/users", async function (req: Request, res: Response) {
  try {
    const user0 = await myDataSource.getRepository(user).create(req.body);
    const results = await myDataSource.getRepository(user).save(user0);
    return res.send(results);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal server error");
  }
});

app.put("/users/:id", async function (req: Request, res: Response) {
  try {
    const user0 = await myDataSource.getRepository(user).findOneBy({
      id: req.params.id,
    });

    if (!user0) {
      return res.status(404).send("User not found");
    }
    myDataSource.getRepository(user).merge(user0, req.body);
    const results = await myDataSource.getRepository(user).save(user0);
    return res.send(results);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal server error");
  }
});

app.delete("/users/:id", async function (req: Request, res: Response) {
  try {
    const results = await myDataSource
      .getRepository(user)
      .delete(req.params.id);
    return res.send(results);
  } catch (error) {}
});

// start express server
app.listen(3000);
