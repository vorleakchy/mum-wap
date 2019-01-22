var x = 10;

function main() {
    console.log("x1: " + x);
    x = 20;

    if (x > 0) {
        var x = 30;
        console.log("x2: " + x);
    }

    var x = 40;
    var f = function(x) {
        console.log("x3: " + x);
    };

    f(50);
}

main();
