const fs = require('fs');
const csv = require('csv-parser');
const results = [];
const readCSVFile = () => {
    fs.createReadStream('Sheet1.csv')
    .pipe(csv())
    .on('data',(data)=>results.push(data))
    .on('end', () => {
        console.log(results.length);
        for (const result of results)
        {
            console.log(`Name : ${result.Name} Age: ${result.Age}`); 
        }
    });
}
readCSVFile();