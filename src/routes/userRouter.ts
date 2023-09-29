const express = require("express");
const userRouter = express.Router(); 
import {
    allUsers,
    oneUser,
    addUser,
    deleteUser,
    editUser,
} from "../controllers/userController"; 

userRouter.get("/" , allUsers);
userRouter.get("/:id", oneUser);
userRouter.post("/addUser" , addUser);
userRouter.delete("/deleteUser/:id", deleteUser);
userRouter.put("/editUser/:id", editUser);

export default userRouter;

