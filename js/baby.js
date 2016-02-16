var babyObj = function()
{
	this.x;
	this.y;
	this.angle;
	this.babyEye = [];
	this.babyBody = [];
	this.babyTail = [];

	this.babyBodyTimer;
	this.babyBodyCount;

	this.babyEyeTimer;
	this.babyEyeCount;
	this.babyEyeInterval;

	this.babyTailTimer;
	this.babyTailCount;

}

babyObj.prototype.init = function()
{
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.angle = 0;
	for(var i = 0 ; i < 2 ; i++)
	{
		this.babyEye[i] = new Image();
		this.babyEye[i].src = "src/babyEye" + i + ".png";
	}
	for(var i = 0 ; i<8 ; i++)
	{
		this.babyTail[i] = new Image();
		this.babyTail[i].src = "src/babyTail" + i + ".png";
	}
	for(var i = 0 ; i<20 ; i++)
	{
		this.babyBody[i] = new Image();
		this.babyBody[i].src = "src/babyFade" + i + ".png";
	}
	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;

	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 0;

	this.babyTailTimer = 0;
	this.babyTailCount = 0;
	
}

babyObj.prototype.draw = function()
{	
	if (!data.gameOver) 
	{
		this.x = lerpDistance(mom.x, this.x, 0.99);
	    this.y = lerpDistance(mom.y, this.y, 0.99);
	    var deltaY = mom.y - this.y;
	    var deltaX = mom.x - this.x;
	    var beta = Math.atan2(deltaY,deltaX) + Math.PI
	    this.angle = lerpAngle(beta, this.angle, 0.96);

	}
	
	this.babyBodyTimer += deltaTime;
	if (this.babyBodyTimer > 300)
	{
		this.babyBodyCount += 1;
		this.babyBodyTimer %= 300;
		if (this.babyBodyCount > 19)
		{
			this.babyBodyCount = 19;
			data.gameOver = true;                          //game over
		}
	}

	this.babyEyeTimer += deltaTime;
	if (this.babyEyeCount == 0) 
		{this.babyEyeInterval = Math.random() * 1500 + 1500;}
	else
		{this.babyEyeInterval = 300}
	if (this.babyEyeTimer > this.babyEyeInterval)
	{
		this.babyEyeCount = (this.babyEyeCount + 1) % 2;
		this.babyEyeTimer = 0;
	}

	this.babyTailTimer += deltaTime;
	if (this.babyTailTimer > 50) 
		{
			this.babyTailCount = (this.babyTailCount + 1) % 8;
			this.babyTailTimer %= 50;
		}

	ctx1.save();
	
	ctx1.translate(this.x ,this.y);
	ctx1.rotate(this.angle);

	var babyBodyCount = this.babyBodyCount;
	ctx1.drawImage(this.babyBody[babyBodyCount] , -this.babyBody[babyBodyCount] .width * 0.5, -this.babyBody[babyBodyCount] .height * 0.5);
	
	var babyTailCount = this.babyTailCount;
	ctx1.drawImage(this.babyTail[babyTailCount] , -this.babyTail[babyTailCount].width * 0.5 + 23, -this.babyTail[babyTailCount].height * 0.5);

	var babyEyeCount = this.babyEyeCount;
	ctx1.drawImage(this.babyEye[babyEyeCount] , -this.babyEye[babyEyeCount] .width * 0.5 , -this.babyEye[babyEyeCount] .height * 0.5);
	
	ctx1.restore();
}

babyObj.prototype.recover = function()
{
	if( this.babyBodyCount > 14 - mom.bigBodyCount * 2)
	this.babyBodyCount = 14 - mom.bigBodyCount * 2;									 //大鱼把口中的果实全部喂给小鱼 
	else
	this.babyBodyCount = Math.max(this.babyBodyCount - 2 , 0) ;                  //但是不能吃小鱼口中的果实
	                                                                            //小鱼图片 0-19是颜色递减

}