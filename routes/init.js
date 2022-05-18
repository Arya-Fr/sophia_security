const express = require("express");
var mainRouter = require("./main");
var forumMainRouteur = require("./forumMain");

module.exports = function(app) {
  app.use(express.json());

  app.use("/", mainRouter);
  app.use("/forum", forumMainRouteur);
};