import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { phoneEmailOrUsername, username, fullname, password } = req.body;

  try {
    //hash the pass
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //check if  username is already registed
    const exist = await User.findOne({ username });
    if (exist)
      return res
        .status(403)
        .json(
          "Sorry this Username already exist try to adding number after name or underscore"
        );

    //create new User and save
    const user = await User.create({
      username,
      fullname,
      password: hashPassword,
    });

    // check user registered either with phone or email
    const isNumber = /^\d{10}$/.test(phoneEmailOrUsername);
    if (isNumber) {
      // check if the number already registered
      const exist = await User.findOne({ phoneNumber: phoneEmailOrUsername });
      if (exist) {
        return res.status(403).json("Sorry this phoneNumber already exist");
      } else {
        // adding number
        user["phoneNumber"] = phoneEmailOrUsername;
      }
    }
    if (!isNumber) {
      //validate email by regex
      const valid = /^[\w.+\-]+@gmail\.com$/.test(phoneEmailOrUsername);

      if (valid) {
        // check if email already exist
        const exist = await User.findOne({ email: phoneEmailOrUsername });
        if (exist) {
          return res.status(403).json("Sorry this email already exist");
        } else {
          // adding email
          user["email"] = phoneEmailOrUsername;
        }
      } else {
        //if not valid phoneNum or Email
        return res.status(403).json("Please enter valid email or number");
      }
    }

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
