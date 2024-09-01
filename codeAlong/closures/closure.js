var birds = 3;

function dogHouse() {
    var dogs = 8;
    function showDogs() {
        dogs++;
        console.log(dogs);
    }
    return showDogs;
}

var getDogs = dogHouse();
var getDogs2 = dogHouse();

getDogs(); // 9
getDogs2(); // 9
