const users = require("../data/users");
const { v4: uuidv4 } = require("uuid");

// CREATE
exports.createUser = (req, res, next) => {
  try {
    const { name, contact, email, designation, company, address } = req.body;

    if (!name || !email) {
      const error = new Error("Name and Email required");
      error.statusCode = 400;
      return next(error);
    }

    const newUser = {
      id: uuidv4(),
      name,
      contact,
      email,
      designation,
      company,
      address,
    };

    users.push(newUser);

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

// GET ALL
exports.getUsers = (req, res) => {
  res.json(users);
};

// GET BY ID
exports.getUserById = (req, res, next) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    return next(error);
  }

  res.json(user);
};

// UPDATE
exports.updateUser = (req, res, next) => {
  const user = users.find(u => u.id === req.params.id);

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    return next(error);
  }

  Object.assign(user, req.body);

  res.json(user);
};

// DELETE
exports.deleteUser = (req, res, next) => {
  const index = users.findIndex(u => u.id === req.params.id);

  if (index === -1) {
    const error = new Error("User not found");
    error.statusCode = 404;
    return next(error);
  }

  users.splice(index, 1);

  res.json({ message: "User deleted" });
};
