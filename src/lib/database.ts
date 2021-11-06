import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI as string;

let client, clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      useUnifiedTopology: true
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    useUnifiedTopology: true
  });
  clientPromise = client.connect();
}

export default clientPromise;
