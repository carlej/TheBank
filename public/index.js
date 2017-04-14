function getUser(){//finds and returns the users ID number
	var pathComp = window.location.pathname.split('/');
	return pathComp[1];
}

function registerUser(){
	var userID = java.unil.UUID.randomUUID(); //creates a random ID number using the JAVA GUID
	
	user_add(userID);

	window.location.href = '/'+userID+'/test-page';
}

function createAccount(){
	var userID = getUser();
	var accountID = java.unil.UUID.randomUUID(); //creates a random ID number using JAVA GUID

	account_add(accountID,userID,0);

	window.location.href = '/'+userID+'/'+accountID+'/testing-page';
}

window.addEventListener('DOMContentLoaded', function (event) {

	var registerUseButton = document.getElementById('register-button');
		registerUseButton.addEventListener('click', registerUser);

	var createAccountButton = document.getElementById('new-account-button');
		createAccountButton.addEventListener('click', createAccount);
});
