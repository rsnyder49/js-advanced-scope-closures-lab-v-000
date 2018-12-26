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

function produceTipCalculator(tip) {
  return function(trip) {
    return tip * trip;
  };
}

function createDriver() {
  let driverID = 0;
  
  class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
      
    }
  }
}



