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


// deleteMany

/*db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
		console.log(result);
	} 
	, (err) => {
		console.log(err);
	} );*/

// deleteOne

/*db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {

	console.log(result);
},(err) => {
	console.log(err);
});*/


// findOneAndDelete

db.collection('Todos').findOneAndDelete({'completed':false}).then((result) => {
	console.log(result);
},(err) => {
	console.log(err);
});


//db.close();

});