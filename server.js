// server.js
import express from "express";
import path from "path";

const app = express();

// Serve static files from dist/public
app.use(express.static(path.join(process.cwd(), "dist/public")));

// SPA fallback: return index.html for all unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist/public/index.html"));
});

// Listen on Railway's PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
