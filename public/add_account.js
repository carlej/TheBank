function account_add(accountID,userID,accountBallance){
	var postUrl = '/add-account';

	var postRequest = new XMLHttpRequest();
	postRequest.open('Post', postUrl);
	postRequest.setRequestHeader('Content-Type', 'application/json');

	postRequest.send(JSON.stringify({
		useID: userID,
		accID: accountID,
		acball: accountBallance
	}));
}