//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(`obj ::: ${obj}`);
/* in es6 destructuring of objects

var user = {"name":"Durgesh","age":"25"};
var {name} = user;
console.log(name) this ll print Durgesh */

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db) => {

if(err){
	console.log('Unable to connect to MongoDB server');
	return;

}
console.log('Connected to MongoDB server');

// db.collection('Todos').insertOne({'text':'Something to do','completed':false},(err,result) => {
// 	if(err){
// 		console.log('Unable to insert todo',err);
// 		return ;
// 	}
// 	console.log(JSON.stringify(result.ops,undefined,2));
// });


db.collection('Users').insertOne({'name':'Durgesh','age':30,'location':'Sydney'},(err,result) => {
	if(err){
		console.log('Unable to insert Users',err);
		return ;
	}
	//console.log(JSON.stringify(result.ops,undefined,2));
	console.log(result.ops[0]._id.getTimestamp());
});

db.close();

});