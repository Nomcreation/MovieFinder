/* 
 * Display result into table in consoe mode
 */

let cTable = require('console.table');

let Display = {
    header : function(data) {
        console.log('\n  -----------------------------------------------------------------');
        console.table([
            {
                '': '',
                Total: data.total_results,
                'Page courante': data.page,
                'Nombre de pages': data.total_pages
            }
        ]);
        console.log('  -----------------------------------------------------------------');
    },
    body : function(data){
        var results = [];
        Object.keys(data).forEach(function (k) {
            var date = new Date(data[k].release_date);
            results.push({ 
                '':'', 
                'Titre' : data[k].title, 
                'Date' : '(' + date.getFullYear() + ')', 
                'Note'  : data[k].vote_average.toString().replace(".", ",") + '/10'
            });
        });
        
        console.table(results);
    }
    
}
module.exports = Display;