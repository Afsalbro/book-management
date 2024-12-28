require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");
const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/book.routes");
const seedAdmin = require("./seeders/adminSeeder");
const seedBooks = require("./seeders/bookSeeder");

app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/books", bookRoutes);

// Database synchronization
db.sequelize.sync().then(async () => {
  console.log("Database synchronized");
  await seedAdmin();
  await seedBooks();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
