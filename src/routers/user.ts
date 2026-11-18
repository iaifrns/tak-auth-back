import { Request, Response } from "express";
import { db } from "../prisma/db";

export const createUsers = async (req: Request, res: Response) => {
  try {
    const { data } = req.body;
    const user = await db.orm.public.User.where({
      email: data.email,
      username: data.username,
    }).first();
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const newUser = await db.orm.public.User.create({
      username: data.username,
      email: data.email,
      name: data.name,
      phone: data.phone,
      role: data.role,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
