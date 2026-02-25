// server.js
import express from "express";
import path from "path";

const app = express();


app.use(express.static(path.join(process.cwd(), "dist/public")));


app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist/public/index.html"));
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
