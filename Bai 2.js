function alternatingSums (a) {
    var team1 = 0;
        team2 = 0;
    arr.forEach((num, index) => {
        if (index % 2 == 0) {
            team1 += num;
        } else {
            team2 += num;
        }
    });
    console.log([team1, team2]);
}

var arr = [60, 40, 55, 75, 64];
alternatingSums(arr);