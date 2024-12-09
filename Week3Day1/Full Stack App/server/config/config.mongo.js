import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const dbName = process.env.dbName
async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName,
        });
        console.log(`📡📡📡You successfully connected to ${dbName} DB!`);
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default dbConnect;