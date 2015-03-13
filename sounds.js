//Sounds and stuff go here.
function loadSounds(){
	var sArray = new Array();
	var pRing = new Audio("http://people.ucsc.edu/~donalexa/phoneRing.wav");
	pRing.volume = 0.4;
	var roBeep = new Audio("http://people.ucsc.edu/~donalexa/roBeep.wav");
	roBeep.volume = 0.3;
	var bellRing = new Audio("http://people.ucsc.edu/~donalexa/bellRing.wav");
	sArray.push(pRing);
	sArray.push(roBeep);
	sArray.push(bellRing);
	//sArray contents: 0 = phoneRing; 1 = robot Beep; 2 = desk bell	
	return sArray;
}

function loadSpeech(){
	var peopleSpeech = new Array();
	var psOne = new Audio("http://people.ucsc.edu/~donalexa/gibberish1.wav");
	var psThree = new Audio("http://people.ucsc.edu/~donalexa/CBT.mp3");
	psThree.volume = 0.4;
	peopleSpeech.push(psOne);
	peopleSpeech.push(psThree);	
	return peopleSpeech;
}