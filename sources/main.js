/* 
 * Main file with the following arguments available : 
 * You can have more information with --help option
 * --language(-l)   String  [fr|en]
 * --animation(-a)  Boolean
 * --min-note(-n)   Int
 * --page(-p)       Int
 * --sort(-s)       String  [year|note]
 */

let config = require('./config');
let Args = require('./args');


// Create defalut URI
let uri = config.apiBaseUri + config.apiVersion
        + '/discover/movie?api_key=' + config.apiKey
        + '&certification_country=US&certification=G&include_adult=false'
        + '&language=' + Args.language
        + '&page=' + Args.page;
// Add options
if (Args.animation)
    uri += '&without_genres=16';
if (Args.sort != undefined)
    uri += '&sort_by=' + Args.sort;

//console.log(uri);

let https = require('https');

https.get(uri, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        let Display = require('./display');
        data = JSON.parse(data);
        
        Display.header(data);
        Display.body(data.results);
        
    });
}).on('error', (err) => {
    console.log("Error : " + err.message);
});