import express from "express";

// only get the router function from the express as we dont want to increase the size of the server file. We need to import the router function to the capture all the end point redirected from the server using use
const router = express.Router();

// get post put methods are called routers

// get the users deatails
router.get("/", (req, res) => {
  const userList = req.body;
  res.json({
    message: "you",
    userList,
  });
});

// Register the new users
router.post("/", (req, res, next) => {
  try {
    const response = res.body;
    console.log(req.body);
    res.json({
      status: "success",
      message: "The  data has been added to the database",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

// Update the password of the users
router.put("/", (req, res) => {

    
  res.json({
    message: "updating data to the database",
  });
});

// remove the user from the databse
router.delete("/", (req, res) => {
  res.json({
    message: "updating data to the database",
  });
});

// if we export router then the methid used in the router also exported
export default router;
