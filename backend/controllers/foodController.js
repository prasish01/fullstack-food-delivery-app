import foodModel from "../models/foodModel.js";
import fs from "fs";
import foodRouter from "../routes/foodRoute.js";

const addFood = async (req, res) => {
  console.log(req.body);
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add food" });
  }
};

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to fetch food details" });
  }
};

const removeFood = async (req, res) => {
  try {
    console.log("Request received:", req.body); // Log request payload
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Failed to Delete food item" });
  }
};

export { addFood, listFood, removeFood };
