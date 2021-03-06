const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27018/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  db.collection('Users').find({
    name: 'Martin Lundqvist'
  }).count().then((count) => {
    console.log(`Todos count: ${count}`);

  } , (err) => {
    console.log('Error fetching documents', err);
  });

  db.collection('Users').find({
    name: 'Martin Lundqvist'
  }).toArray().then((docs) => {
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2));
  } , (err) => {
    console.log('Error fetching documents', err);
  });



  //client.close();
});
