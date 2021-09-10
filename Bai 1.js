var arr = ["Binh", "Hung", "Cao", "Phuoc", "Khanh"];
function allLongestStrings (inputArray) {
    var longest = 0;
        word = null;
    for (var i = 0; i < inputArray.length; i++) {
        if (longest < inputArray[i].length) {
            longest = inputArray[i].length;
            word = inputArray[i];
        }
    }
    console.log([word]);
}

allLongestStrings(arr);