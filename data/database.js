import { MongoClient } from 'mongodb';

const clusterAddress = "devcluster.wlwdmq3.mongodb.net";
const dbUser = "dimitar";
const dbPassword = "eNeVn0MuRXW5wchZ";
const dbName = "";

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  await client.connect();
  await client.db(dbName).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
}

const database = client.db(dbName);

export default database;