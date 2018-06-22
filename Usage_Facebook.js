var fs = require('fs');

var csv = require('csv');
var obj = csv();
var myData = [];

const rp = require('request-promise');
const cheerio = require('cheerio');
const request = require('request');


var writeStream = fs.createWriteStream("output.csv");
writeStream.write('Shop,Facebook Pixel,Facebook Messenger,Facebook Chat Bubble\n');
var result = [];

obj.from.path('./Shops.csv').to.array(function (data){
	for(var i=1;i<data.length;i++){
		UpdateCSV(data[i]);
		
		}
});



var Facebook = 'Facebook';


function UpdateCSV(data){
request(data[0], function (error, response, html) {
	if (!error && response.statusCode == 200) {
         var str = html.toString();
         var index = str.match('Facebook Pixel');
         if(index!=null)
         {
         	data[1] = 'X';
         } 
         index = str.match('//connect.facebook.net/en_US/sdk.js');
         if(index!=null)
         {
        	 data[2] = 'X';
         } 
         index = str.match('//connect.facebook.net/en_US/sdk/xfbml.customerchat.js');
         if(index!=null)
         {
         	data[3] = 'X';
                data[1] = 'X';
         }       
        var res= data.join(',');
        console.log(res);
        writeStream.write(res.toString()+'\n');
	}
	});
}
