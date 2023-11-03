import express from "express";

const app = express();

// middlewares
app.use(express.json());

// connections and listeners
app.listen(5001, () => console.log("Server running on port 5001"));
