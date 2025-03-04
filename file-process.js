const csv = require('csv-parser')
const fs = require('fs')
const results = [];
var song_list = [];

function ParseListINI(data){
    var regex = {
        section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
        param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/
    };
    var song_list_parsed = [];
    var lines = data.split(/[\r\n]+/);
    var song_num = -1;
	for (var i = 0; i < lines.length; i++) {
		const line = lines[i];
        if (regex.param.test(line)){
            var match = line.match(regex.param);
			song_list_parsed[song_num][match[1]] = match[2];
        } else if (regex.section.test(line)){
			song_list_parsed.push({});
			song_num++;
        }
	}
    return song_list_parsed;
}

function ParseSongList(listini) {
    song_list = ParseListINI(listini);
    let optionList = document.getElementById('song_list');
    song_list.forEach((song) => {
        let el = document.createElement("option")
        el.textContent = `${song.artist} - ${song.title}`;
        el.value = song.shortname;
        optionList.appendChild(el);
    });
    $("#song-count").text(`${song_list.length} songs`);
    $("#uploadCSV").remove();
    $("#song_list").chosen();
}

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
            el.textContent = `${option["﻿\"Artist\""]} - ${option["Song Title"]}`;
            el.value = option["Short Name"];
            optionList.appendChild(el);
        });
        $("#song-count").text(`${results.length} songs`);
        $("#uploadCSV").remove();
        $("#song_list").chosen();
    });
}