const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
const User = require("../models/userModel");
//create contact
module.exports.create = asyncHandler(async (req, res) => {
  const { name, email, mobile, message } = req.body;

  const contact = new Contact({
    name,
    email,
    mobile,
    message,
  });

  try {
    const createcontact = await contact.save();
    res.json({
      error: false,
      message: "Message sent successfully",
      data: createcontact,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: error.message,
      data: null,
    });
  }
});

// get all contact
module.exports.getAll = asyncHandler(async (req, res) => {
  try {
    const contactlist = await Contact.find({});
    res.json({
      error: false,
      message: "Message get successfully",
      data: contactlist,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});

// get all users
module.exports.getUserList = asyncHandler(async (req, res) => {
  try {
    const userlist = await User.find({});
    res.json({
      error: false,
      message: "Users get successfully",
      data: userlist,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Something went wrong!!",
      data: null,
    });
  }
});
