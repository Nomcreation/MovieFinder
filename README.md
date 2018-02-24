# MovieFinder

Simple CLI application used to retreive movie list from themoviedb.com API
Only load family contents [G Certification]

## Getting Started

Load the current application, install the dependecies listed below.
Get your API key form  https://www.themoviedb.org/ 
How to get your API key, you must create an account first and folox these instructions : https://developers.themoviedb.org/3/getting-started/introduction

Add your API Key to the config.js file

### Prerequisites

Make sure to load the following dependencies

```
command-line-args
command-line-usage
console.table
```

### Installing

Download sources, add dependencies
```
npm i command-line-args
npm i command-line-usage
npm i console.table
```

Add your API key to the config file
...
var config = {};

config.apiBaseUri   = "https://api.themoviedb.org";
config.apiVersion   = "/3";
config.apiKey       = "ADD_KEY_HERE";

module.exports = config;
...

### And coding style tests

Explain what these tests test and why

```
// Standard call
node main.js

//Will return only movies, no cartoons
node main.js --animation 

//All titles will be in english and the 5th page will be displayed
node main.js -l en --page 5 
```

## Built With

* [NodeJS](https://nodejs.org/en/) - an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. 

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Noumcreation** - *From an original idea of* - [GH-DG]

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you for the chalenge !
* First ever built NodeJS app