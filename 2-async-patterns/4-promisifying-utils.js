const { readFile, writeFile } = require("fs");
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        console.log(first);
        const second = await readFilePromise('./content/second.txt', 'utf8');
        console.log(second);
        await writeilePromise('./content/result-mind-grenade.txt', `This is awesome : ${first} ${second} /n`, {
            flag: 'a'
        })
    } catch (error) {
        console.log(error);
    }
}

start();