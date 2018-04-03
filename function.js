function setup() {
	createCanvas(200,200);
	loadJSON ('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6a864d20fdc23a6a29f65b97c96fc388&units=imperial', gotData, 'jsonp');


}

function gotData(data){
	weather = data;

}

function draw (){
	background(0);
		if (weather)
		ellipse(100, 100, weather.main.temp, weather.main.temp);
		ellipse(300, 100, weather.main.temp, weather.main.temp);

}



var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=rainbow&api-key=775cd20c0b6d4381b5e2242dc67ad591';

function setup(){
    noCanvas();
    loadJSON(url, gotData);    
}

function gotData(data){
    var articles = data.response.docs;
    
    for (var i = 0; i < articles.length; i++) { 
        createElement( 'h1' , articles[i].headline.main);
        createP(articles[i].snippet);
    }
    //println(data.response.docs[1].headline.main);
    
}




