function registerUser(){
	var userID = 10;//createUserID();
	user_add(userID);

	window.location.href = '/'+userID+'/test-page';
}

function createAccount(){
	var userID = 10;//createUserID();
	var accountID = 10;//createAccountID();

	account_add(accountID,userID,0);

	window.location.href = '/'+userID+'/testing-page';
}

window.addEventListener('DOMContentLoaded', function (event) {

	var registerUseButton = document.getElementById('register-button');
		registerUseButton.addEventListener('click', registerUser);

	var createAccountButton = document.getElementById('new-account-button');
		createAccountButton.addEventListener('click', createAccount);
});