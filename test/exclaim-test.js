var exclaim = require("./exclaim2").exclaim;

if (exclaim('hi') !== 'hi!!!!!') {
    throw new Error("Exclaiming hi should equal hi!!!!!");
} else {
    console.log('.');
}