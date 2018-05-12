function addToHighscores(oldHighscores, value) {
  var newTable = oldHighscores.slice(0);
  newTable.push(value);
  var result = addToSortedArray(newTable);
  return result;
}

function addToSortedArray(arr, t) {
  for (var i = 0; i < arr.length; i++) {
    if (t > arr[i]) {
      return [...arr.slice(0, i), t, ...arr.slice(i)];
    }
  }
  return [...arr, t];
}

describe("sortArray", () => {
  it("a single element array is always sorted", () => {
    var a = [];
    expect(addToSortedArray(a, 100)).toEqual([100]);
  });
  it("can sort arbitrary numbers", () => {
    var a = [1000, 500];
    expect(addToSortedArray(a, 100)).toEqual([1000, 500, 100]);
    var b = [1000, 500];
    expect(addToSortedArray(b, 750)).toEqual([1000, 750, 500]);
  });
});

describe.skip("highscores", () => {
  it("can add smaller values to a highscore table", () => {
    var highscoreTable = [];
    var result = addToHighscores(highscoreTable, 1000);
    expect(result).toEqual([1000]);
    var result2 = addToHighscores(result, 100);
    expect(result2).toEqual([1000, 100]);
    var result3 = addToHighscores(result2, 10);
    expect(result3).toEqual([1000, 100, 10]);
  });

  it("can add any number to a highscore table", () => {
    var highscoreTable = [];
    var result = addToHighscores(highscoreTable, 100);
    expect(result).toEqual([100]);
    var result2 = addToHighscores(result, 1000);
    expect(result2).toEqual([1000, 100]);
    var result3 = addToHighscores(result2, 10);
    expect(result3).toEqual([1000, 100, 10]);
  });
});
