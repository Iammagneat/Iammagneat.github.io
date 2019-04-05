var test = {
	age: 40,
	blabla: function() {
		return this.age;
	},
};
document.getElementById("par4").innerHTML=(test.blabla());