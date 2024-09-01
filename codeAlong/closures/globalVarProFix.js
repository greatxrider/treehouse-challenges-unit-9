function makeCounter(noun) {
    var count = 0;
    return function () {
        count += 1;
        return count + ` ${noun}`;
    }
}

var birdCounter = makeCounter('birds');
var dogCounter = makeCounter('dogs');

birdCounter(); // 1
dogCounter(); // 1
