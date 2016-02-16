var can1;
var can2;
var ctx1
var ctx2;
var lastTime;
var deltaTime; 
var canWidth;
var canHeight;

var bgPic = new Image();
var ane;
var fruit;
var mom;
var baby;
var data;
var wave;
var halo;
var dust;

var mx;
var my;

document.body.onload = game;

function game()
{
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){

	can1=document.getElementById("canvas1");//fishes,dust,UI,scores,circle
	can2=document.getElementById("canvas2");//backgroud.ane,fruit
	ctx1=can1.getContext('2d');
	ctx2=can2.getContext('2d');

	can1.addEventListener("mousemove" , onMouseMove , false);

	bgPic.src = "src/background.jpg";

	canWidth = can2.width;
	canHeight = can2.height;

	ctx1.shadowBlur = "15";
	ctx1.shadowColor = "white";

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	data = new dataObj();
	data.init();

	wave = new waveObj();
	wave.init();

	halo = new haloObj();
	halo.init();

	dust = new dustObj();
	dust.init();

}

function gameloop(){

	window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if(deltaTime > 40) deltaTime = 40;
    
    drawBackground();  
    ane.draw();

    momFruitsCollision();
    momBabyCollision();

    fruitMonitor();
    fruit.draw();
    
    ctx1.clearRect(0 ,0, canWidth,canHeight);
    mom.draw();
    baby.draw();
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();


}

function onMouseMove(e)
{
	if(e.offSetX || e.layerX)
	{
		mx = e.offSetX ==undefined ? e.layerX : e.offSetX;
		my = e.offSetY ==undefined ? e.layerY : e.offSetY;		
	}
}