const Account = require("../models/account");
const User = require("../models/user");
const z = require("zod");

const signupBody = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});
const signinBody = z.object({
  username: z.string(),
  password: z.string().min(5),
});

const signup = async (req, res) => {
  try {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Incorrect inputs",
      });
    }
    const exist = await User.findOne({ username: req.body.username });
    if (exist) {
      return res.json({
        message: "Username already taken",
      });
    }

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();
    const userId = newUser._id;
    await Account.create({
      userId,
      balance: 1 + Math.random() * 10000,
    });
    return res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error,
    });
  }
};

const signin = async (req, res) => {
  try {
    console.log("Login in");
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Incorrect inputs",
      });
    }
    const user = await User.findOne({ username: req.body.username });
    if (!user.comparePassword(req.body.password)) {
      return res.status(404).json({
        message: "Incorrect password",
        err: "Something went wrong in signin",
      });
    }
    const token = user.genJWT();
    return res.status(200).json({
      message: "Login successfully",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = {
  signup,
  signin,
};
