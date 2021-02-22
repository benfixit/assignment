/**
 * 
 * @param {*} intervals 
 * @param {*} mergeDistance 
 */
function mergeInterval(intervals, mergeDistance){
    // If the intervals length is less than 2, no need to proceed we just convert it and return
    if(intervals.length < 2){
      return convertToArray(intervals);
    }

    // The Delete operation does not obey the merge distance, so we have to filter them out and
    // then sort Intervals based on their start time
    const mergeIntervals = intervals.filter(interval => interval.action !== "DELETED").sort((a, b) => {
        return a.start - b.start;
    });

    let filteredIntervals = [mergeIntervals[0]];

    // We remove adjacent intervals with the same start and end time that have different actions (remove/add)
    for(let i = 1; i < mergeIntervals.length; i++){
        if(
            mergeIntervals[i].start === mergeIntervals[i - 1].start && 
            mergeIntervals[i].end === mergeIntervals[i - 1].end &&
            mergeIntervals[i].action === "REMOVED")
        {
            filteredIntervals.shift();
        } else {
            filteredIntervals.push(mergeIntervals[i]);
        }
    }

    return merge(convertToArray(filteredIntervals), mergeDistance);
  }

  /**
   * Merges sorted intervals taking into account the merge distance
   * 
   * @param {*} intervals 
   * @param {*} mergeDistance 
   */
  function merge(intervals, mergeDistance){
    let previous = intervals[0];
    
    let result = [];
    
    for(let i = 1; i < intervals.length; i++){
      if((previous[1]) + mergeDistance >= intervals[i][0]){
        previous = [previous[0], Math.max(previous[1], intervals[i][1])]
      } else {
        result.push(previous);
        previous = intervals[i]
      }
    }
    
    result.push(previous);
    
    return result;
  }


  /**
   * Converts intervals array of objects to array of array of the start and end time of each interval
   * @param {*} intervals 
   */
  function convertToArray(intervals){
      return intervals.map(interval => {
        return [interval.start, interval.end]
      })
  }
  
  module.exports = mergeInterval
  
  
  
  
  
  
  