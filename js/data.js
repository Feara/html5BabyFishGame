var dataObj = function()
{
	this.score;
	this.doubleScore;
	this.orangeNum;
	this.blueNum;
	this.gameOver;
	this.alpha;
} 

dataObj.prototype.init = function()
{
	this.score = 0;
	this.doubleScore = 1;
	this.orangeNum = 0;
	this.blueNum = 0;
	this.gameOver = false;
	this.alpha = 0 ;

	//data画笔 设置
	ctx1.font = "20px Verdana";
	ctx1.fillStyle = "white";
	ctx1.textAlign = "center";

	mx = canWidth * 0.5;
	my = canHeight * 0.5;
}

dataObj.prototype.addScore = function()
{
	this.score += 1;
	this.doubleScore = 1;
	this.score = this.score * this.doubleScore;

}

dataObj.prototype.double = function()
{
	this.doubleScore = 2;
	this.score = this.score * this.doubleScore;
}

dataObj.prototype.draw = function()
{
	ctx1.save();
	ctx1.fillText("score " + this.score, canWidth * 0.5, canHeight - 50 );
	
	if (this.gameOver) 
	{	
		this.alpha += deltaTime * 0.0004;
		ctx1.font = "100px Verdana";
		ctx1.fillStyle = "rgba(255,255,255," + this.alpha + ")"		
		ctx1.fillText("Game Over", canWidth * 0.5, canHeight * 0.5);
		
	}
	ctx1.restore();
	//ctx1.fillText("doubleScore " + this.doubleScore, canWidth * 0.5, canHeight - 80);
}