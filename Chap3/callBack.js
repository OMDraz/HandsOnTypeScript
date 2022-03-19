function letMeKnowWhenComplete(size, callback) {
  var reducer = 0;
  for (var i = 1; i < size; i++) {
    reducer = Math.sin(reducer * i);
  }
  callback();
}

letMeKnowWhenComplete(1000000000, function () {
  console.log("Great it is completed.");
});
