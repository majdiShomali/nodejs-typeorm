import { Request, Response } from "express";
import { myDataSource } from "../libs/app-data-source";
import { user } from "../models/user.entity";

export const allUsers = async (req: Request, res: Response) => {
    try {
        const users = await myDataSource.getRepository(user).find();
        res.json(users);
      } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal server error");
      }
  };


  export const oneUser = async (req: Request, res: Response) => {
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
  };


  export const addUser = async (req: Request, res: Response) => {
  try {
    const user0 = await myDataSource.getRepository(user).create(req.body);
    const results = await myDataSource.getRepository(user).save(user0);
    return res.send(results);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal server error");
  }
  };


  export const editUser = async (req: Request, res: Response) => {
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

  };



  export const deleteUser = async (req: Request, res: Response) => {
  try {
    const results = await myDataSource
      .getRepository(user)
      .delete(req.params.id);
    return res.send(results);
  } catch (error) {}

  };


