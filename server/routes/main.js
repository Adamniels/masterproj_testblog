const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

/**
 * GET
 * FIRSTPAGE/LOGIN
 */
router.get("", (req, res) => {
  const locals = {
    title: "Master Project",
    desc: "training for master project",
  };

  res.render("index", { locals, layout: "layouts/unauthorized" });
});

/**
 * GET
 * HOME
 */
router.get("/homepage", async (req, res) => {
  const locals = {
    title: "Master Project",
    desc: "training for master project",
  };

  try {
    const data = await Todo.find();
    res.render("homepage", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

/**
 * GET
 * ABOUT
 */
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;

function insertTodosOnce() {
  Todo.insertMany([
    {
      title: "Clean out the garage",
      body: "throw away garbage and vacuum",
      priority: 1,
    },
    {
      title: "Cook",
      body: "Make carbonara",
      priority: 2,
    },
  ]);
}

//insertTodosOnce();
