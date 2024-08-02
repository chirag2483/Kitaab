import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    let errors = [];
    if (password.length < 6 || password.length > 16) {
      errors.push("Password must be between 6 and 16 characters");
    }
    // Number check
    if (!password.match(/[0-9]+/)) {
      errors.push("Password must contain at least one number");
    }
    // Uppercase check
    if (!password.match(/[A-Z]+/)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    // Lowercase check
    if (!password.match(/[a-z]+/)) {
      errors.push("Password must contain at least one lowercase letter");
    }
    // Special character check
    if (!password.match(/[!@#$%^&*()]+/)) {
      errors.push("Password must contain at least one special character");
    }
    if(errors.length!=0){
        return res.status(400).json({ message: errors[0] });
    }
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    } else {
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
