let sportsOne: String[] = ["Golf", "Cricket", "Tennis", "Swimming"];

// for (let i = 0; i < sportsOne.length; i++) {
//   console.log(sportsOne[i]);
// }

for (let tempSport of sportsOne) {
  if (tempSport == "Cricket") {
    console.log(tempSport + " << My Favorite!");
  } else {
    console.log(tempSport);
  }
}
