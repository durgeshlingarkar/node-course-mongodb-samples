//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

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

// query example 
/*db.collection('Todos').find({_id:new ObjectID("5a3e2f214522bb28ec68d488")}).toArray().then((docs) => {
	console.log('Todos');
	console.log(JSON.stringify(docs,undefined,2));

}, (err) => {
	console.log(`Unable to fetch todos. ${err}`);
});*/

// query count example 

/*db.collection('Todos').find().count().then((count) => {
	console.log(`Todos count : ${count}`);
	
}, (err) => {
	console.log(`Unable to fetch count for todos. ${err}`);
});*/

db.collection('Users').find({name:'Shyra'}).toArray().then((data) => {
	console.log('Data');
	console.log(JSON.stringify(data,undefined,0));
},(err) => {
	console.log(`Unable to fetch data from Users collection.${err}`);
})

//db.close();

});