
var sum= 0;
var i=0 ;
var tab = process.argv.slice(2);

var count = 0;
tab.forEach((i) => {
	sum += Number(i);
})




console.log(sum);
