const light = require('.')

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " SOME_PARAM");
  process.exit(-1);
}

var color = process.argv[2];

console.log('Setting color : ', color);

switch (color) {
  case 'red':
    light.setRed()
    break;
  case 'green':
    light.setGreen()
    break;
  case 'blue':
    light.setBlue()
    break;
  default:
    light.setWhite()
    break;
}
