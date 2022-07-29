const express = require("express");
const { Users } = require("../../../database/models");
const router = express.Router();

router.post("/get_user", async (req, res) => {
  const user = await Users.findOne({
    where: {
      Username: req.body.Username,
      Password: req.body.Password,
    },
  });
  if (user) {
    console.log(user);
    res.json({
      message: "Login Success",
      user: user,
    });
  } else {
    res.json({
      message: "Login Failed",
    });
  }
});

router.post("/create_user", async (req, res) => {
  const { Email, Username, Password } = req.body;
  console.log("line 11");
  try {
    const UserInfo = {
      Email: Email,
      Username: Username,
      Password: Password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log("woork");

    const CreateUser = await Users.create(UserInfo);
    console.log(CreateUser);
    res.status(200).send(CreateUser);
  } catch (error) {
    console.log("no work");
    res.status(400).send(error);
  }
});

module.exports = router;
