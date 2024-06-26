import express from "express";
import connectDB from "./lib/DBConnect.js";
import router from "./routes/register.route.js";
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();
app.use("/register", router);


// app.get("/", (req, res) => {
//   res.json({ message: "This is Register Login Project" });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
