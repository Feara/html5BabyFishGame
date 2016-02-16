var momObj = function()
{
	this.x;
	this.y;
	this.angle;
	this.bigEye = [];
	this.bigBody = [];
	this.bigTail = [];

	this.bigTailTimer;
	this.bigTailCount;

	this.bigEyeTimer;
	this.bigEyeCount;
	this.bigEyeInterval;

	this.bigBodyCount;


}
momObj.prototype.init = function() 
{
	this.x = canWidth * 0.5 ;
	this.y = canHeight * 0.5 ;
	this.angle = 0;

	for( var i = 0; i < 2; i++)      //大鱼眼睛 2个图片初始化
	{
		this.bigEye[i] = new Image();
		this.bigEye[i].src = "src/bigEye" + i + ".png";
	}

	
	for(var i = 0; i < 8; i++)            //大鱼尾巴 8个图片初始化
	{
		this.bigTail[i] = new Image();
		this.bigTail[i].src = "src/bigTail" + i + ".png";
	}

	for (var i = 0; i < 8; i++)           //大鱼身体8个图片初始化
	{
		this.bigBody[i] = new Image();
		this.bigBody[i].src = "src/bigSwim" + i + ".png";	
	}
	

	this.bigTailCount = 0;
	this.bigTailTimer = 0;

	this.bigEyeTimer = 0;
	this.bigEyeCount = 0;
	this.bigEyeInterval = 0;

	this.bigBodyCount = 0;
}

momObj.prototype.draw = function()

{  
	this.x = lerpDistance(mx, this.x, 0.96);
	this.y = lerpDistance(my, this.y, 0.96);
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX) + Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.8);

	this.bigTailTimer += deltaTime;     //大鱼尾巴动画
	if (this.bigTailTimer > 50) 
	{
		this.bigTailCount = (this.bigTailCount + 1) % 8;
		this.bigTailTimer %= 50;
	};

	this.bigEyeTimer += deltaTime;    //大鱼眼睛动画
	if (this.bigEyeCount == 0) 
		{this.bigEyeInterval = Math.random() * 1500 + 1500;}
	else
		{this.bigEyeInterval = 300}
	if (this.bigEyeTimer > this.bigEyeInterval)
	{
		this.bigEyeCount = (this.bigEyeCount + 1) % 2;
		this.bigEyeTimer = 0;
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);

	var bigBodyCount = this.bigBodyCount;//大鱼身体 
	ctx1.drawImage(this.bigBody[bigBodyCount], -this.bigBody[bigBodyCount].width * 0.5, -this.bigBody[bigBodyCount].height * 0.5);//大鱼身体


	var bigEyeCount = this.bigEyeCount; //大鱼眼睛 逐帧动画
	ctx1.drawImage(this.bigEye[bigEyeCount], -this.bigEye[bigEyeCount].width * 0.5, -this.bigEye[bigEyeCount].height * 0.5);

	
	var bigTailCount = this.bigTailCount;   //大鱼尾巴 逐帧动画
	ctx1.drawImage(this.bigTail[bigTailCount],-this.bigTail[bigTailCount].width * 0.5 +30, -this.bigTail[bigTailCount].height * 0.5);
	ctx1.restore();
} 