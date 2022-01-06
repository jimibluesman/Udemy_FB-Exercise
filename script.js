var database = [
{
	username: "james",
	password: "supersecret"
},
{
	username: "sally",
	password: "123"
},
{
	username: "ingrid",
	password: "777"
}

];

var newsFeed = [
{
	username: "Bobby",
	timeline: "So tired from all that learning"

},
{
	username: "Sally",
	timeline: "Javascript is soooo coool"
},
{
	username: "Mitch",
	timeline: "Javascript is preeetyy cool!"
}

];

var userNamePrompt = prompt ("What's your username?");
var passwordPrompt = prompt ("What's your password?");

function signIn(user, pass){
	if(user === database[0].username &&
		pass === database[0].password) {
			console.log(newsFeed);
		} else {
			alert("sorry, wrong username and password")
		}
}

signIn(userNamePrompt, passwordPrompt);