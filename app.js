const express = require("express");

const app = express();

const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());
app.use(logger);
app.use("/students", studentRoutes);
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Student Management REST API is running"
    });
});
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: "Internal Server Error"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});