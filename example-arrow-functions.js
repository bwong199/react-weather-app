var names = ['Ben', 'Peter', "Andrew"]

// names.forEach(function(name){
// 	console.log(name)
// });

// names.forEach((name) => {
// 	console.log(name)
// })

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));


// var person = {
// 	name: 'Andrew', 
// 	greet: function(){
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hi to ' + name)
// 		});
// 	}
// };

// person.greet();


// function add(a, b){
// 	return a + b;
// }
var addState = (a, b) => {
	return a + b
}

var addExpression = (a, b) => a + b; 

// add(a,b) => {
// 	return a + b)
// }

console.log(addExpression(1, 3))
console.log(addExpression(9, 0))