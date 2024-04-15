import express from "express";
const router = express.Router();

// users table with properties like id, email, username, first_name, last_name.
// hashpwd table with properties like id, username, password.
const users = [];
const hashpwd = [];

router.post("/register", (req, res) => {
    const { username, password } = req.body;
    // Use transaction to add a user
    // Allow users to register by providing a username and password. 
    //Hash the password using bcrypt before storing it in the the database
    // Use bcrypt to hash user passwords before storing them in the table and for verifying passwords during login.
  });

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Allow users to login by providing their username and password. 
  //Compare the hashed password from the JSON file with the provided password.
  // Use bcrypt to hash user passwords before storing them in the table and for verifying passwords during login.
});

router.get("/users", (res) => {
  // Retrieve a list of all registered users from the database
  res.send("Homepage");
});
  
router.get("/users/:id", (res) => {
  // Retrieve a list of all registered users from the database
  res.send("Homepage");
});


router.put("/users/:id:", (res) => {
  //Update a user’s information by ID in the database
})



export default router;