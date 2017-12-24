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


// findOneAndUpdate

/*db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5a3fae7a8f915a9e7205909f')}
	,{
		$set:{
			completed:true
		}
	}
	,{
		returnOriginal:false	
	}).then((result) => {
		console.log(result);
	} , (err) => {
		console.log(err);
	});*/


db.collection('Users').findOneAndUpdate({_id:new ObjectID('5a3e369cbd72522a78e96554')}
	,{
		$set:{
			name:'Ashwini Lingarkar'
		},
		$inc:{
			age:2
		}
	}
	,{
		returnOriginal:false
	}
	).then(
		(result) => {
			console.log(result);
		}, 
		(err) => {
			console.log(err);
		}
		);


//db.close();

});