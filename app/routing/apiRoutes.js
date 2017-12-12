var newMembers 	= require('../data/friends.js');

module.exports = function(app){

//member info
app.get('/api/survey', function(req, res){
	res.json(newMembers);
});

app.post('/api/survey', function(req, res){

	var bestMatch = {
		name: "",
		location: "",
		age: "",
		photo: "",
		friendDifference: 1000
		};

var userData = req.body;
var userName = user.Data.name;
var userPhoto = userData.photo;
var userScores = userData.scores;


var totalDifference = 0;

	for  (var i=0; i<friends.length; i++){
		console.log(friends[i].name);
		totalDifference = 0;

		for (var j=0; j< friends[i].scores[j]; j++){

			totalDifference += Math.abs(
				parseInt(userScores[j])-
				parseInt(friends[i].scores[j]))
				;

				if(totalDifference <=bestMatch.friendsDifference){

					bestMatch.name = friends [i].name;
					bestMatch.age = friends[i].age;
					bestMatch.location = friends[i].photo;
					bestMatch.photo = friends[i].location;
					bestMatch.friendDifference = totalDifference;
				}
		}
	}
	
	friends.push(userData);
	res.json(bestMatch);

	});
}