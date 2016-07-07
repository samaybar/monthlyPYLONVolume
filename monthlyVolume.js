var request = require('request');


var headers = [];
var options = [];
var indexLimit = 1000000;
var body = [];
var dailyVolume = 0;
var totalVolume = 0;


//comment out this block if you want to specify your account credentials in code below
var args = process.argv.slice(2);
if (!args[0] || args[0] === '' || args[0] === 'undefined' || args[0] <1 || args[0]>9) {
    throw new Error('FAIL: You must provide accoun:token');
}
var j = args[0];
//end section to comment out here

//you can uncomment the following line and replace with your DataSift credentials to avoid inputting each time you run
//var j = "USERNAME:DATASIFT_ACCOUNT_APIKEY";


console.log("recording_name,recording_id,trailing_32_volume");


   
   
   

    // Configure the request
    options = {
        url: 'https://api.datasift.com/v1.3/pylon/get?per_page=100',
        method: 'GET',        
        headers: {'Authorization': j}
        };

        
    // Start the request
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           
            var subscriptionsJson = JSON.parse(body);
            var bodyJson = subscriptionsJson.subscriptions;
            for (var i = 0; i < bodyJson.length; i++)
            {
                var dailyVolumeTemp;
                var idTemp;
                idTemp = ","+bodyJson[i].id;
                
                {
                    totalVolume = totalVolume + bodyJson[i].volume;
                    console.log(bodyJson[i].name+idTemp+","+bodyJson[i].volume);
                }
                
                
            }
            console.log("==========,==========,==========");
            console.log("Total_Volume_Trailing_32,,"+totalVolume);
       
        }
        else {
        	console.log(error);
             console.log("\n");
        console.log("Data for account: "+account);
        console.log("No running indexes today or error received")
        }
    });

