const csv = require('csv-parser')
const fs = require('fs')
const results = [];

function parseCSV(file) {
fs.createReadStream(file)
    .pipe(csv({ separator: '\t' }))
    .on('data', (data) => results.push(data))
    .on('end', () => {
    //console.log(results);

/*     console.log(results[100]["Song Title"]);
    console.log(results[100]['"Artist"']);
    console.log(results[100]["Artist"]);
    console.log(results[100][Object.keys(results[100])]);
    console.log(results[100]["Short Name"]);
    console.log(Object.keys(results[100]));
    console.log(getKeyByValue(results[100], "AC/DC")); */


    let optionList = document.getElementById('song_list');
    results.forEach(option => {
        let el = document.createElement("option")
        console.log(option["Song Title"]);
        el.textContent = option["Song Title"];
        el.value = option["Short Name"];
        optionList.appendChild(el);
    });

    $("#uploadCSV").remove();
    $("#song_list").chosen();
});
}