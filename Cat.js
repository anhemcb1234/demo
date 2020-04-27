function Cat(name) {
	this.name = name;
	this.age = 12
}
var mickey = new Cat('who');
console.log(mickey);
Cat.prototype.hello = function () {
	console.log("hello")
}
function show() {
	
}
module.export = Cat;