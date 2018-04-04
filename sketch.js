
var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=yDCCeSvcpPbQ6VyCgzSv1zTTlb8gLQIx";
var query = "&q=sexy+boobs+girl&limit=62&offset=0&lang=en&rating=pg-13";



function setup() {
	noCanvas();
    var url = api + apiKey + query;
    loadJSON(url, gotData);
}




function setup1() { 
	noCanvas();
    var url = api + apiKey + query;
    loadJSON(url, gotData);
}

function gotData(gif){
    for (var i = 0; i < gif.data.length; i++){
        
    createImg(gif.data[i].images.fixed_height.url);
    
    }
};






