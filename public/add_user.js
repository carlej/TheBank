function user_add(userID){
	var postUrl = '/add-user';
	//some code here to make first account

	var postRequest = new XMLHttpRequest();
	postRequest.open('Post', postUrl);
	postRequest.setRequestHeader('Content-Type', 'application/json');

	postRequest.send(JSON.stringify({
		useID: userID,
	}));
}