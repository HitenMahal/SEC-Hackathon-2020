
function pointSystem (user1,user2) {
    var score = 0
    var interests1 = ["Basketball","Soccer","Hockey"]
    var interests2 = ["Hockey","Painting","Netflix"]
    var location1 = "Calgary"
    var location2 = "Calgary"
    var friends1 = ["Me","You","Them"]
    var friends2 = ["Bob","You","Tracy"]
    /*
    var interests1 = user1.get_interests
    var interests2 = user2.get_interests
    var location1 = user1.get_location
    var location2 = user2.get_location
    var friends1 = user1.get_friends
    var friends2 = user1.get_friends
    */
    score = score + findCommonElements(interests1,interests2) * 5
    score = score + findCommonElements(friends1,friends2) * 10
    score = score + locationCheck(location1,location2) * 20
    return score
  }
  
function locationCheck(location1,location2) {
    if (location1 == location2) {
    return 1
    }
    return 0
  }
  
function findCommonElements(array1, array2) { 
      var common = [] 
      for(let i = 0; i < array1.length; i++) { 
          for(let j = 0; j < array2.length; j++) { 
              if(array1[i] === array2[j]) { 
                  common.push(array1[i]);
              } 
          } 
      }
      return common.length
  } 
console.log({myMessage: pointSystem(0,0) })