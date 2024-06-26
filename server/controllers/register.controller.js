import express from "express";
import User from "../models/register.model.js";

export const createUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    birthday: req.body.birthday,
    password: req.body.password,
  });
  try {
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
