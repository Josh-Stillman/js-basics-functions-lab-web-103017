// Code your solution in this file!
function distanceFromHqInBlocks (input) {
  return Math.abs(input - 42)
}

function distanceFromHqInFeet (input) {
  return distanceFromHqInBlocks(input) * 264
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function
}

function distanceTravelledInFeet(in1, in2){
  return Math.abs(in1 - in2) * 264

}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination)
  console.log(`distance = ${distance}`)
  switch (true) {
    case distance < 400:
      return 0
      break;
    case distance >= 400 && distance <= 2000:
      return .02 * distance
      break;
    case distance > 2000 && distance < 2500:
        return 25
      break;
    case distance >= 2500:
      return 'cannot travel that far'
      break;
  }
}
