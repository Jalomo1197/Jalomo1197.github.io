var canvas;

var name;

//screen text;
var title;
var firstoption;
var secondOption;

//input variables
var slider;
var greeting;
var message;
var nameinput;
var checkbox1;
var checkbox2;

//loadout
var loadout;
var button;
var button2;
var option = 0;
var MoneyOption = 0;

var getaway = false;
var position;


//images elements
var bird;
var Popo;
var snack;
var img1;
var img2;
var img3;
var img4;

function preload(){

}


function setup(){
    canvas = createCanvas (windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');

   background(0,0,0);
    //min,max,startingvalue
    beginning();
}


function draw(){
    if (getaway == true){
        getAwayAnim();
    }
}


function beginning(){
    greeting = createP("Please type in your name and press enter");
    nameinput = createInput();

    Popo = createImg("./images/Sim.gif");
    Popo.position(windowWidth - 250, windowHeight - 190);

    //check and see if the user typed and pressed enter
    nameinput.changed(startStoryelemnets);
}


function startStoryelemnets(){

    greeting.hide();
    nameinput.hide();
    Popo.hide();

    greeting = createP(nameinput.value() + " you've been in huge debt for the past 15 years now. You start thinking about robbing a bank");
    checkbox1 = createCheckbox('Rob a bank', false);
    checkbox2 = createCheckbox('Have a Snicker', false);

    bird = createImg("./images/robber.png");
    bird.style("width", "320px");
    bird.style("height", "400px");

    Popo = createImg("./images/snick1.png");
    Popo.style("width", "400px");
    Popo.style("height", "200px");


    checkbox1.changed(Rob);
    checkbox2.changed(Snicker);
}


function Rob(){
    background(0,0,0);
    checkbox1.hide();
    checkbox2.hide();
    greeting.hide();
    bird.hide();
    Popo.hide();

    //details and weapons
    greeting = createP("Leessgetit");
    message = createP("loadout 1: toy pistol, a dark blue balloon, and a bird custom in your bookbag.");
    message2 = createP("loadout 2: real pistol, a sports car, and a mask");


    button = createButton('Loadout 1');
    button.mousePressed(option_set_1);

    button2 = createButton('Loadout 2');
    button2.mousePressed(option_set_2);

    bird = createImg("./images/RG.gif");
    bird.style("width", "160px");
    bird.style("height", "200px");
    bird.position(windowWidth/4 * 3, windowHeight /3);
    Popo = createImg("./images/Car.gif");
    Popo.style("width", "200px");
    Popo.style("height", "200px");
    Popo.position(windowWidth/4 * 3, windowHeight /2 + 50);
    img1 = createImg("./images/Mask.gif");
    img1.style("width", "200px");
    img1.style("height", "200px");
    img1.position(windowWidth/4 * 3 - 200, windowHeight /3 + 100);


    img2 = createImg("./images/FG.gif");
    img2.style("width", "200px");
    img2.style("height", "200px");
    img2.position(windowWidth/4 , windowHeight /3);

    img3 = createImg("./images/Balloon.gif");
    img3.style("width", "200px");
    img3.style("height", "200px");
    img3.position(windowWidth/4 , windowHeight /3 + 170);

    img4 = createImg("./images/BC.gif");
    img4.style("width", "300px");
    img4.style("height", "300px");
    img4.position(windowWidth/4 - 200 , windowHeight /3 + 50);





}

function option_set_1(){
    option = 1;
    RobScene1();
}

function option_set_2(){
    option = 2;
    RobScene1();
}

function RobScene1(){
    //createP(option + ' selected');
    background(0,0,0);
    message.hide();
    message2.hide();
    button.hide();
    button2.hide();
    greeting.hide();
    bird.hide();
    Popo.hide();
    img1.hide();
    img2.hide();
    img3.hide();
    img4.hide();

    message = createP("You're at the bank and you have everyone on the ground! Cops are on their way!");
    message2 = createP("How much money do you want to put in the bag???");

    button = createButton('Enough for my debt!');
    button.mousePressed(money_option_set_1);

    button2 = createButton('All the money!');
    button2.mousePressed(money_option_set_2);


    img1 = createImg("./images/greedy.gif");
    img1.style("width", "300px");
    img1.style("height", "300px");
    img1.position(windowWidth/4 * 3, windowHeight - 300);

    img2 = createImg("./images/enough.gif");
    img2.style("width", "350px");
    img2.style("height", "300px");
    img2.position(windowWidth/4 - 200, windowHeight - 300);

}

function money_option_set_1(){
    MoneyOption = 1;
    RobScene2();
}

function money_option_set_2(){
    MoneyOption = 2;
    RobScene2();
}

function RobScene2(){
    background(0,0,0);
    message.hide();
    message2.hide();
    button.hide();
    button2.hide();
    img1.hide();
    img2.hide();

    message = createP("Time for the get away!");
    if (option == 2){
        message2 = createP("wait...the cops are outside...and your car is outside...");
        img1 = createImg('./images/cop1.gif');
        img1.position(windowWidth/3 - 200, windowHeight-270);
        img2 = createImg('./images/CarO.gif');
        img2.style("width", "500px");
        img2.style("height", "300px");
        img2.position(windowWidth/2 - 225, windowHeight- 250);
        img3 = createImg('./images/cop1.gif');
        img3.position(windowWidth/3*2 + 50, windowHeight-270);

        img4 = createImg("./images/lost.gif");
        img4.position(windowWidth/2 - 130, windowHeight/2 - 200);
    }
    else if (option == 1){
        getaway = true;
        bird = createImg("./images/twitter.jpg");
        Popo = createImg("./images/Popo.jpg");
        message2 = createP("Pull out the balloon, and fly away!");
        slider = createSlider(10,300,10);
    }
}

function getAwayAnim(){
        background(0,0,0);
        stroke(255);
        position = windowHeight - 200 - (slider.value() + 50 )*0.5
        line(100 + slider.value()*3,  position ,  100 + slider.value()*3,  position + 150)
        stroke(0);
        fill(25,25,112);
        ellipse( 100 + slider.value()*3, windowHeight - 200 - slider.value()*1.2, slider.value() +50 , slider.value() + 50);

        Popo.position(windowWidth - 200, windowHeight - 90);
        Popo.style("width",  "200px");
        Popo.style("height", "150ox");


        bird.position(88 + slider.value()*3,  position + 148);
        bird.style("width",  "100px");
        bird.style("height", "75ox");

        img2 = createImg("./images/clueless.gif");
        img2.style("width", "200px");
        img2.style("height", "200px");
        img2.position( windowWidth / 4 * 3 - 100, windowHeight - 200);


        if (MoneyOption == 1){
            if (slider.value() >= 300){
                getaway = false;
                GotAway();
            }
        }
        else if(MoneyOption == 2){
            if (slider.value() >= 200){
                getaway = false;
                balloonPopped();
            }
        }
}

function GotAway(){
    Popo.hide();
    bird.hide();
    img2.hide();
    message.hide();
    message2.hide();
    slider.hide();
    background(0,0,0);

    message = createP("Nice!");
    Popo = createImg("./images/congrats.gif");

    img4 = createImg("./images/bottle.gif");
    img4.position(windowWidth/2 + 40, windowHeight/2 - 200);

    img2 = createImg("./images/bottle.gif");
    img2.position(windowWidth/2 -670, windowHeight/2 - 200);

    img1 = createImg("./images/win.gif");
    img1.position(windowWidth/2 - 200 , windowHeight/2);
}

function balloonPopped(){
    Popo.hide();
    bird.hide();
    img2.hide();
    message.hide();
    message2.hide();
    slider.hide();
    background(0,0,0);

    message = createP("Too much money was in the bag. Your balloon popped! Too greedy!");
    img1 = createImg("./images/pop.gif");
    img2 = createImg("./images/lost.gif");
    img2.position(windowWidth/2 - 150, windowHeight/2 - 70);
}


function Snicker(){
    checkbox1.hide();
    checkbox2.hide();
    greeting.hide();
    bird.hide();
    Popo.hide();
    background(0,0,0);

    message = createP("Just relax. American household debt hit a record $13.21 trillion in 2018. Being in debt is sooo in right now. have a Snickers and enjoy some Netflix. ");
    message2 = createA('https://www.netflix.com', "Click here to watch The Office!");
    message2.position(windowWidth/2 - 100, windowHeight/2);
    Popo = createImg("./images/Net.gif");

    bird = createImg("./images/Netw.gif");
    bird.style("width", "300px");
    bird.style("height", "200px");
    bird.position(0, windowHeight - 200);
    snack = createImg("./images/Snickers.gif");
    snack.style("width", "150px");
    snack.style("height", "100px");
    snack.position (330, windowHeight - 150);


}




function windowResized(){
    canvas = createCanvas (windowWidth, windowHeight);
    background(0,0,0);
}
