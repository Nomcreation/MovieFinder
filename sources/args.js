/* 
 * Argument management for this application
 * 
 * Possible arguments : 
 * --language(-l)   String  [fr|en]
 * --animation(-a)  Boolean
 * --min-note(-n)   Int
 * --page(-p)       Int
 * --sort(-s)       String  [date|note]
 */


let optionDefinitions = [
    {
        name: 'help',
        alias: 'h',
        type: Boolean,
        description: 'Display help guide.'
    },
    {
        name: 'language', 
        alias: 'l', 
        type: String, 
        defaultValue: 'fr',
        description: 'Accepted values [fr|en] to set the display language. Default : fr'
    },
    {
        name: 'animation', 
        alias: 'a', 
        type: Boolean, 
        defaultValue: false,
        description: 'Set this option to remove animation movies from the results.'
    },
    {
        name: 'note', 
        alias: 'n', 
        type: Number,
        description: "Use to set the minimum note to fetch, can't be greater than 10"
    },
    {
        name: 'page', 
        alias: 'p', 
        type: Number, 
        defaultValue: 1,
        description: 'Used like a pager to reach the wanted page. Defalut : 1'
    },
    {
        name: 'sort', 
        alias: 's', 
        type: String,
        description: 'Accepted values [year|note] to sort results by.'
    }
]
let commandLineArgs = require('command-line-args')
let commandLineUsage = require('command-line-usage')
let options = commandLineArgs(optionDefinitions)


if (options.help) {
  const usage = commandLineUsage([
    {
      header: 'Typical Example',
      content: '$ node main.js [options]'
    },
    {
      header: 'General Options',
      optionList: optionDefinitions
    },
    {
      content: 'Project home: [underline]{https://github.com/Nomcreation/MovieFinder}'
    }
  ])
  console.log(usage);
  process.exit();
} else {
    if(options.language == 'en'){
        options.language = 'en-US';
    } else {
        options.language = 'fr-FR';
    }
    if(options.sort !== undefined && (options.sort == 'note' || options.sort == 'year')){
        if(options.sort == 'note')
            options.sort = 'vote_average.desc';
        else 
            options.sort = 'release_date.desc';
    } else {
       delete options.sort;
    }

    if(options.note !== undefined){
        if(options.note > 10 || isNaN(options.note))
            options.note = 10;
    } 
}

let Args = options;

module.exports = Args;