var haloObj = function()
{
	this.x = [];
	this.y = [];
	this.r = [];
	this.alive = [];
	this.alpha = [];

}

haloObj.prototype.num = 10;

haloObj.prototype.init = function()
{
	for (var i = 0; i < this.num; i++) 
	{
		this.x[i] = 0;
		this.y[i] = 0;
		this.r[i] = 0;
		this.alive[i] = false;
		this.alpha[i] = 1;
	}
}

haloObj.prototype.born = function(x, y)
{
	for (var i = 0; i < this.num; i++) 
	{
		if (!this.alive[i]) 
		{
			this.x[i] = x;
			this.y[i] = y;
			this.alive[i] = true;
			this.r[i] = 0;    //!!!be sure to reset r[i] here to aviod error when halo[i] is new born!!1
			break;
		}
		
	}
}

haloObj.prototype.draw = function()

 {
 	ctx1.save();
 	ctx1.lineWidth = 2;
 	ctx1.shadowBlur = 10;
 	ctx1.shadowColor = "rgb(203,91,0)";

 	for (var i = 0; i < this.num; i++) 
 	{  
 		if (this.alive[i]) 
 		{


 			this.r[i] += deltaTime * 0.1;   //radius[0-100]

 			if (this.r[i] > 100) 
 			{
 				this.alive[i] = false;
 				break;
 			}
 			
 			this.alpha[i] = 1 - this.r[i] * 0.01;   //transparent[1-0]

 			ctx1.beginPath();
 			ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
 			ctx1.closePath();
 			ctx1.strokeStyle = "rgba(203,91,0," + this.alpha[i] + ")";
 			ctx1.stroke();
 		}
 	
 	}
 	ctx1.restore();
 }