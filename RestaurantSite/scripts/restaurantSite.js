
/*
	Name: Ashley Kellen
	Date Created: 1/20/2019
	Most Recent Revision: 1/21/2019
*/



function validateForm() {
	
	var name = document.forms["contact"]["name"].value;
	var email = document.forms["contact"]["email"].value;
	var phone = document.forms["contact"]["phone"].value;

	if(name == "") {
		alert("Name is required.");
		return false;
	}

	var re = /^[\w ]+$/;
	
	if(!re.test(name) && name !== "") {
		alert("Name uses invalid characters.");
		return false;
	}

	if(email == "") {
		alert("Email is required.");
		return false;
	}

	if(phone == "") {
		alert("Phone number is required.");
		return false;
	}

	else  alert("Thank you for your name, email, and valid phone number.");
}