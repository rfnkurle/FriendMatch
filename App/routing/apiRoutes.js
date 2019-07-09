var path = require("path");
var friendsData = require("../data/friends.js");



module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    
    
    });
//creates variables that will be used to create friends match algorithm
    app.post("/api/friends", function (req, res) {
        var newFriendsInfo = req.body;
        var userResponse = newFriendsInfo.scores;
        console.log(userResponse)
        console.log(newFriendsInfo)
    
        var matchName = "";
        var matchImage = "";
        var totalDifference = Infinity;
        
        
    //cycles through eat object in the array "FriendsData"
    for (var i = 0; i < friendsData.length; i++) {
            var difference = 0;
    //for each object in friends data, finds the differnce in userinput score and friendsData scores
            for (var j = 0; j < userResponse.length; j++) {
                difference += Math.abs(parseInt(userResponse[j]) - parseInt(friendsData[i].scores[j]));
            }
             if (difference < totalDifference){
                 totalDifference = difference;
               console.log(difference)
                 matchName = friendsData[i].name;
                matchImage = friendsData[i].photo;        
            }
            
        }
    //puts user's into into local API
        friendsData.push(newFriendsInfo)
            res.json({status: "OK", matchName: matchName, matchImage: matchImage});
    
    });

    
};

