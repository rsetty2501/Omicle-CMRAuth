// testing connection to mongoDB

const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://test:test@omiclecmr-esapr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url);


async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log("Error!!!!!!!: " + err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);