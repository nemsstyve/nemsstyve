// readme.js
const Mustache = require('mustache');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';
/**
 * DATA is the object that contains all
 * the data to be provided to Mustache
 * Notice the "name" and "date" property.
 */
let DATA = {
    name: 'Styve',
    date: new Date().toLocaleDateString('fr-GB', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        timeZone: 'Europe/Paris',
    }),
    heure: new Date().toLocaleDateString('fr-GB', {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Europe/Paris',
    }),
};
/**
 * A - We open 'main.mustache'
 * B - We ask Mustache to render our file with the data
 * C - We create a readme.md file with the generated output
 */
function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
        if (err) throw err;
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
}
generateReadMe();
