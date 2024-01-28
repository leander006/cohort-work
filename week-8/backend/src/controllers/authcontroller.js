const express = require("express");

const User = require("../models/user");
const router = express.Router();
const z = require("zod");

const signupBody = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

router.post("/", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }

  const exist = await User.findOne({ username: req.body.username });
  if(!exist){
      return res.json({
            
      })
  }
});

module.exports = router;
