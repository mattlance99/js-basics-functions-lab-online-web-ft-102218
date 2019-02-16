function distanceFromHqInBlocks (currentBlock) {
  if (currentBlock > 42) {
    return currentBlock - 42;
  } else {
    return 42 - currentBlock;
  }
}

function distanceFromHqInFeet(currentBlock) {
  let distanceFeet;
  distanceFeet =  distanceFromHqInBlocks(currentBlock);
  return distanceFeet * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock){
  if (endingBlock > startingBlock) {
    return (endingBlock - startingBlock) * 264;
  } else {
    return (startingBlock - endingBlock) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet <= 400){
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * .02
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far'
  }
}
