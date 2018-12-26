function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let diffTravel = Math.abs(end-start);
    let difference = blockRange - diffTravel;
    if (difference > 0) {
      return `within range by ${difference}`;
    }
    else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  };
}

function produceTipCalulator(tip) {
  return function(trip) {
    
  };
}