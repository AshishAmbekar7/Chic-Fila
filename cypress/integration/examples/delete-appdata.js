const { rimraf } = require('rimraf')
const appDataPath = 'C://Users//sbavisa//AppData//Roaming//Cypress//cy//production';
rimraf(appDataPath, () => {
  console.log('App data deleted successfully!');
});