//Global Variables
var canvas = document.getElementById("display");
	canvas.width = 1000; 
	canvas.height= 400;
var grafix = canvas.getContext('2d');


function sprite (options) {
				
    var that = {};
					
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
	

	that.render = function () {

        // Draw the animation
        that.context.drawImage(
           that.image,
           that.sx,
           that.sy,
           that.sw,
           that.sh,
           that.dx,
           that.dy,
           that.dw,
           that.dh);
	}	   
 
} 

var playerImage = new Image();
playerImage.src = "./images/player.png";
var playerIdle_spr = sprite({
	context: canvas.getContext("2d"),
    image: playerImage,
	sx: 0,
    sy: 0,
    sw: 55,
	sh: 113,
	dx:100,
	dy:100,
	dw: 55,
	dh: 113
	
});

playerIdle_spr.render();

//Player Sprites

//Enemy Sprites
