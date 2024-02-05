const User = require("../models/user");
const z = require("zod");

const signupBody = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});
const signinBody = z.object({
  username: z.string().email(),
  password: z.string(),
});

const signup = async (req, res) => {
  try {
    console.log("singup");
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Incorrect inputs",
      });
    }
    console.log("zod done");
    const exist = await User.findOne({ username: req.body.username });
    console.log("email taken", exist);
    if (exist) {
      return res.json({
        message: "Email already taken / Incorrect inputs",
      });
    }

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();

    console.log("created user");
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
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Incorrect inputs",
      });
    }
    const user = await User.findOne({ username: req.body.username });
    if (!user.comparePassword(password)) {
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
