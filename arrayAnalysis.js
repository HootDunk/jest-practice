
// take in array of numbers and return an object with
// avg, min, max, and length key value pairs (values will be rounded as shown in example input & output)
function arrayAnalysis(array){
  const average = Math.round((array.reduce((accumulator, currentVal) => accumulator + currentVal) / array.length));
  return {
    average: average,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }
  
}

export default arrayAnalysis;
