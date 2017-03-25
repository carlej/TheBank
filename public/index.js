function registerUser(){
	var userID = 10//createUserID();
	user_add(userID)
}

window.addEventListener('DOMContentLoaded', function (event) {

	var registerUseButton = document.getElementById('register-button');
		registerUseButton.addEventListener('click', registerUser);
});