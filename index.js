function produceDrivingRange(trip) {
  return function(beginning, ending) {
    let start = parseInt(beginning);
    let end = parseInt(ending);
    let diffTravel = Math.abs(end-start);
    let difference = blockRange - diffTravel;
    if(difference > 0) {
      return `within range by ${difference}`;
    }
    else{
      return `${Math.abs(difference)} blocks out of range`;
    }
  };
}