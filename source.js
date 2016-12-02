function tickets(peopleInLine){
  var counter25 = 0, counter50 = 0;
  for (var i = 0; i < peopleInLine.length; i++) {     
    if (peopleInLine[i] === 25) {
      counter25++;  
    } else if (peopleInLine[i] === 50 && counter25 >= 1) {
      counter50++;
      counter25--;     
    } else if (peopleInLine[i] === 100) {
        if (counter50 >= 1 && counter25 >= 1) {
          counter50--;
          counter25--;  
        } else if (counter25 >= 3) {
          counter25 -= 3;
        } else {
          return "NO";
        }
    } else {
      return "NO";
    }
  }
  return "YES";
}