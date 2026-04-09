const Promise=require('promise');

const MongoClient=require('mongodb').MongoClient;
const url='mongodb://localhost/TestDB';
MongoClient.connect(url)
.then(function(err,db){
  db.collection('Test').updateOne({
    "name":"Ayush"
  },{
    $set:{
      "name":"Ayush Rai"
    }
  });
})
.catch(error=>alert(error.message));
