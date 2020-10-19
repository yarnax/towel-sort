
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let answerMatrix = [];
  matrix.forEach((lesserMatrix, index) => {
    if (index % 2 !== 0) {
      answerMatrix = answerMatrix.concat(lesserMatrix.reverse());
    }
    else {
      answerMatrix = answerMatrix.concat(lesserMatrix);
    }
  })


  
  return answerMatrix;
}
