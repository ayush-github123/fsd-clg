const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// error middleware
app.use(errorHandler);

app.listen(5000, () => console.log("Server running on port 5000"));
