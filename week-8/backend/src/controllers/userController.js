const zod = require("zod");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { SALT } = require("../config/server-config");
const updateBody = zod.object({
  username: zod.string().optional(),
  email: zod.string().email().optional(),
  password: zod.string().min(5).optional(),
});

const update = async (req, res) => {
  try {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Incorrect inputs",
      });
    }

    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, parseInt(SALT));
    }
    const user = await User.updateOne({ _id: req.userId }, req.body);

    res.json({
      message: "Updated successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const filter = req.query.username || "";
    const users = await User.find({
      username: { $regex: filter, $options: "i" },
    });
    const data = [];
    users.map((u) => {
      const { password, ...others } = u._doc;
      data.push(others);
    });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error,
    });
  }
};
module.exports = {
  update,
  get,
};
