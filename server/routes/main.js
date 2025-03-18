const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const User = require("../models/User");

/**
 * GET
 * FIRSTPAGE/LOGIN
 */
router.get("", (req, res) => {
  const locals = {
    title: "Master Project",
    desc: "training for master project",
  };

  res.render("login", { locals, layout: "layouts/unauthorized" });
});

/**
 * POST
 * LOGIN -> HOME
 */
router.post("/homepage", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    /**
     * TODO:
     *  - ta hand om username och kolla med databas om det är korrekt part 7 9:22
     */

    const data = await Todo.find();
    res.render("homepage", { data });
  } catch (error) {
    console.log(error);
  }
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
 * TODO :id
 */
router.get("/todo/:id", async (req, res) => {
  try {
    const locals = {
      title: "Master Project",
      desc: "training for master project",
    };

    let id = req.params.id;

    const data = await Todo.findById({ _id: id });
    res.render("todo", { locals, data });
  } catch (error) {
    console.log(error);
  }
});

/**
 * GET
 * ABOUT
 */
router.get("/edit-todo", async (req, res) => {
  try {
    const locals = {
      title: "Master Project",
      desc: "training for master project",
    };

    res.render("edit-todo", { locals });
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
