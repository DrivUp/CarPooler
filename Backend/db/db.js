import mongoose from "mongoose";

async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log('Connected to DB');
    } catch (err) {
        console.log(err);
    }
}


export default connectToDb;