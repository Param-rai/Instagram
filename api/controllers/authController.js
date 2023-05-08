import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { username, fullname, email, password, phoneNumber } = req.body;
  try {
    //hash the pass
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //create new User and save
    const user = await User.create({
      username,
      fullname,
      email,
      phoneNumber,
      password: hashPassword,
    });

    await user.save();
    //send new user created back
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const login = async (req, res) => {
  const { username, email, phoneNumber, password } = req.body;
  const creds = username ? { username } : email ? { email } : { phoneNumber };
  try {
    const user = await User.findOne(creds);
    !user && res.status(404).json("user not found");

    //check if user put correct pass
    const validPassword = await bcrypt.compare(password, user.password);
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
