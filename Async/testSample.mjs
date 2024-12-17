import { readFile } from 'fs';

readFile('./sample.txt',(err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    let isi = data.toString()
        .replace('%name%', "Fadhil")
        .replace('%your_name%', "Dicoding");

    console.log(isi);
});