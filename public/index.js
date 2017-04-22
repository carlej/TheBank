function generateID(pref,postf,digit){
	var ID = pref;
	for(var x=(digit+1); x>0; x--)
	{
		var r = (Math.random()*9).toFixed(0);
		ID = ID+r;
	}
	var ID = ID+postf;
	return ID;
}

function getAccount(){
	var pathComp = window.location.pathname.split('/');
	return pathComp[2];
}

function getUser(){//finds and returns the users ID number
	var pathComp = window.location.pathname.split('/');
	return pathComp[1];
}

function registerUser(){
	var userID = generateID('U','R',10);

	user_add(userID);

	window.location.href = '/'+userID+'/test-page';
}

function createAccount(){
	var userID = getUser();
	var accountID = generateID('S','A',10);

	//account_add(accountID,userID,0);

	window.location.href = '/'+userID+'/'+accountID+'/testing-page';
}

window.addEventListener('DOMContentLoaded', function (event) {

	var registerUseButton = document.getElementById('register-button');
		registerUseButton.addEventListener('click', registerUser);

	var createAccountButton = document.getElementById('newaccountbutton');
		createAccountButton.addEventListener('click', createAccount);
});
