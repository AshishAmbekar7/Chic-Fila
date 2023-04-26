// describe('convert data to Json', function()
// { 
//     it('read data from excel', function()
// {
	
// Requiring the module
const reader = require('xlsx')
// Reading our test file
const file = reader.readFile('cypress/fixtures/excelcypresstest.xlsx')
const sheets = file.SheetNames
let data = []
for(let i = 0; i < sheets.length; i++)
{
const temp = reader.utils.sheet_to_json(
		file.Sheets[file.SheetNames[i]])
temp.forEach((res) => {
	data.push(res)
})
}
console.log(data)
const fs = require('fs')
fs.writeFileSync('cypress/fixtures/data1.json', JSON.stringify(data))



 



