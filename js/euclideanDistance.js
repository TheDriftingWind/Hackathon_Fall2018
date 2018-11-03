function calculateMatches()

// point 1 and point 2 should be arrays
function calculateDistance(point1, point2){
  var vectorDifference = [];
  var sum = 0;
  var final;
  //there are 7 dimensions for each point
  //Step 1: Find the difference between each respective dimension
  for(i=0; i < point1.length; i++){
    // console.log(vectorDifference)
    vectorDifference[i] = point1[i] - point2[i];
  }
  //Step 2: Sum the Square each of the dimensions of the difference vector
  for(i=0; i < point1.length; i++){
    sum += Math.pow(vectorDifference[i], 2);
  }
  // console.log(sum)
  final = Math.sqrt(sum);
  // console.log(final);
  return final;

}

//testing
// var test_p1 = [22, 1, 42, 10];
// var test_p2 = [20, 0, 36, 8];
// calculateDistance(test_p1, test_p2);
