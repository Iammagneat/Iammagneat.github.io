var person = {
	firstName: "Mike",
	lastName: "Buggernaut",
	id: 5566,
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
};
document.getElementById("par3").innerHTML = person.fullName();