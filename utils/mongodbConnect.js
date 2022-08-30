import mongoose from 'mongoose';

const connection = {};

async function mongodbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.mongodb_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState;
    console.log("mongodb connection:", connection.isConnected);
}

export default mongodbConnect;