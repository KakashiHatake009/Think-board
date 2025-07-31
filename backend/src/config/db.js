import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected sucessfully!")
    } catch (error) {
        console.error("Oh nooo!! Something went wrong with database connection.", error);
        process.exit(1); // exit with failue

    }
}

