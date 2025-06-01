const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleWare //
app.use(cors());
app.use(express.json());

// mubq1dL3oEd493p2
// tourist-server-user




const uri = "mongodb+srv://tourist-server-user:mubq1dL3oEd493p2@cluster0.nyrmjv4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
 serverApi: {
  version: ServerApiVersion.v1,
  strict: true,
  deprecationErrors: true,
 }
});

async function run() {
 try {
  // Connect the client to the server	(optional starting in v4.7)
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
 } finally {
  // Ensures that the client will close when you finish/error
  await client.close();
 }
}
run().catch(console.dir);





app.get('/', (req, res) => {
 res.send("tourist connected and running atv this moment")
})

app.listen(port, () => {
 console.log(`tourist is running in ${port}`)
}); 