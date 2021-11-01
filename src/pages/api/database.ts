import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI as string);

export default async function database(dbName: string, collName: string) {
    if (typeof dbName !== 'string') return (collName as any).json({ msg: 'no' });
    await client.connect();
    return client.db(dbName).collection(collName);
}
