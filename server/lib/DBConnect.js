import mongoose from "mongoose";
import  dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_NAME);
    console.log(`'registerdb' is connected succesfully....`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
