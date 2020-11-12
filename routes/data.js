const express = require("express");
const router = express.Router();
const {
  getAllMentor,
  getAllMentee,
  matchMyersBriggs,
  insertIntoMentor,
  insertIntoMentee,
  bootcamperMatch,
  testing,
} = require(`../db/models/data.js`);
//Working
router.get("/", function (req, res) {
  res.json({ message: "the server is working..." });
});

router.get("/mentor", async function (req, res) {
  const userInput = req.query.myersBriggs;
  console.log(userInput)
  const items = await bootcamperMatch(userInput);
  res.json({ success: true, payload: items });
});
router.get("/mentee", async function (req, res) {
  const items = await getAllMentee();
  res.json({ success: true, payload: items });
});

//Not working

//req.queryParameters -- object{}

router.get("/myersBriggs", async function (req, res) {
  //value will be passed down into models
  //how to get value from front end???
  const items = await matchMyersBriggs();
  res.json({ success: true, payload: items });
});

// //Bootcamper match -------
// router.get("/:myersBriggs", async function (req, res) {
//   const userInput = req.params.myersBriggs;
//   console.log(userInput);
//   bootcamperMatch(userInput);
//   return res.json({ success: true });
// });

router.post("/mentor", async function (req, res) {
  console.log("this is the post mantor request");
  let body = req.body;
  console.log("this is body", body);
  // if (!body.mentee) {
  //   return res.send("404 Error");
  // }
  const items = await insertIntoMentor(body);
  console.log("this is items", items);
  res.json(items);
});

router.post("/mentee", async function (req, res) {
  console.log("this is the post mentee request");
  let body = req.body;
  console.log("this is body", body);
  // if (!body.mentee) {
  //   return res.send("404 Error");
  // }
  const items = await insertIntoMentee(body);
  console.log("this is items", items);
  res.json(items);
});

//Zaid's test
router.post("/test", async function (req, res) {
  console.log("this is the post");
  let body = req.body;
  if (!body.todo) {
    return res.send("404 Error");
  }
  const items = await testing(req.body);
  console.log(items);
  res.json(items);
});
//---------Test End---------//

module.exports = { router };
