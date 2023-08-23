// code your solution here
function superbowlWin(array) {
    const winningObject = array.find(obj => obj.result === "W");
    if (winningObject) {
      return winningObject.year;
    } else {
      return undefined;
    }
  }