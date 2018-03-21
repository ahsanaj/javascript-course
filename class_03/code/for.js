// Count from 0 to 5

for (var i = 0; i <= 5; i += 1) {
    console.log(i);
}

// Count from 10 to 4

for (var j = 10; j >= 4; j -= 2) {
    console.log(j);
}

// Count from 1 to 100
// But as soon I see the number 12
// I want to stop the loop

for (var count = 1; count <= 100; count += 1) {
    console.log(count);
    // IF count is 12
    // Log Stop the loop
    if (count === 12) {
        break;
    }
}