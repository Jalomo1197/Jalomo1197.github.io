var canvas;

var name;

//screen text;
var title;
var firstoption;
var second Option;

//input variables
var slider;
var greeting;
var nameinput;

var startStoryBool = false;


function preload(){

}


function setup(){
    canvas = createCanvas (windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');

    background(120);
    beginning();
}


function draw(){
     if (startStoryBool){
        startStory();
     }
}


function beginning(){
    greeting = createP("Please type in your name and press enter");
    nameinput.position(windowWidth/2 , windowHeight/2);
    nameinput = createInput();


    //check and see if the user typed and pressed enter
    nameinput.changed(startStoryelemnets);
}


function startStoryelemnets(){

    greeting.hide();
    nameinput.hide();

    slider = createSlider(0,255,0);
    name = createElement('p', nameinput.value());
    createP(nameinput.value() + " paragraph");

    startStoryBool = true;
}


function startStory(){
    background(120);

    print(slider.value());
    fill (slider.value());
    ellipse(400, 400, 100, 100);
}


function windowResized(){
    canvas = createCanvas (windowWidth, windowHeight);
    background(120);
}
