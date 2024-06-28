/*
Expanding Square Spiral
For this arcade activity, this took my the longest.
Uses:
- My custom spriral function
- bt.catmullRom() from blot
*/

const width = 125
const height = 125
const iterations = 40;
const increment = 5;
const circleWidth = 40
const center = [width / 2, height / 2]

setDocDimensions(width, height)

function generateSpiralCoordinates(width, height, iterations, increment) {
    const coordinates = [];
    const centerX = width / 2;
    const centerY = height / 2;
    let currentIncrement = increment;

    for (let i = 0; i < iterations; i++) {
        switch (i % 4) {
            case 0: // Left
                coordinates.push([centerX - currentIncrement, centerY]);
                break;
            case 1: // Up
                coordinates.push([centerX, centerY + currentIncrement]);
                break;
            case 2: // Right
                coordinates.push([centerX + currentIncrement, centerY]);
                break;
            case 3: // Down
                coordinates.push([centerX, centerY - currentIncrement]);
                currentIncrement += increment; // Increase the increment after a full cycle
                break;
        }
    }

    return coordinates;
}

const spiralCords = generateSpiralCoordinates(width, height, iterations, increment)
const curve = bt.catmullRom(spiralCords, 1)

drawLines([curve])