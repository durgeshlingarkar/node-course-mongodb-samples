var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAppMongoose');


var user = mongoose.model('user',{
	email:{
		type:String
		,required:true
		,trim:true
		,minlength:1
	}
});

var newUser = new user({
	email:'durgeshlingarkar@gmail.com'
}) 

newUser.save().then((user) => {
	console.log('New user created :', user);
}, (err) => {
	console.log(err);
})

/*var Todo = mongoose.model('Todo',{
	text:{
		type:String,
		required:true,
		minlength:1,
		trim:true
	}
	,completed:{
		type:Boolean
		,default:false
	}
	,completedAt:{
		type:Number
		,default:null
	}
});

var newTodo = new Todo({
	text:'Cook dinner'
	,completed:false
});

newTodo.save().then((result) => {
	console.log('Saved ToDo');
	console.log(result);
}, (err) => {
	console.log('Error to Saved ToDo');
	console.log(err);

});

var otherTodo = new Todo({
	text:'Edit this video'
	,completed:true
	,completedAt:123
});

otherTodo.save().then((result) => {
	console.log('Other todo saved');
	console.log(result);
} , (err) => {
	console.log(err);
});

*/