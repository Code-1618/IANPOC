const express = require("express");
const path = require("path");
const foodData = require("./foodData");

const app = express();

// Allow the server to process JSON data.
app.use(express.json());

// Serve files from the public folder.
app.use(express.static(path.join(__dirname, "../public")));

// GET /foods returns all food items from the mock database.
app.get("/foods", (req, res) => {
    console.log("GET /foods request received");

    const foods = foodData.getAll();

    console.log("Returning food items:", foods);

    res.status(200).json(foods);
});

// Handle routes that do not exist.
app.use((req, res) => {
    console.log(`404 - Route not found: ${req.method} ${req.url}`);

    res.status(404).json({
        error: "Route not found"
    });
});

// Use the deployment platform's port, or port 3000 locally.
const PORT = process.env.PORT || 3000;

// Start the server only when this file is run directly.
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;