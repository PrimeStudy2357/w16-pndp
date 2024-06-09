var express = require('express');
var router = express.Router();

const {
  getAllPints,
  addNewPint,
  deletePint,
} = require("../services/pintService");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const pints = await getAllPints();

  res.render("index", { title: "Pints!", pints: pints });
});

/** POST new pint */
router.post("/", async function (req, res, next) {
  const result = await addNewPint({
    name: req.body.name,
    rule: req.body.rule,
    url: req.body.url,
  });

  if(!result)
    res.render("error", {
      message: "internal error",
      error: { status: "500", stack: ""},
  });
  else res.redirect("/");
});

/** Delete pint by name */
router.post("/deletePint", async function (req, res, next) {
  await deletePint(req.body.name);

  res.redirect("/");
});

module.exports = router;

module.exports = router;
