var waveObj = function()
{
	this.x = [];
	this.y = [];
	this.r = [];
	this.alpha = [];
	this.alive = [];
}

waveObj.prototype.num = 10;

waveObj.prototype.init = function() 
{


	for ( var i = 0 ; i < this.num ; i++)
	{
		this.alive[i] = false;

		this.r[i] = 0; // [0-50]
		this.alpha[i] = 0.7 - this.r[i] * 0.01 * 7/5; //[0.7-0]
		
		this.x[i] = 0 ;
		this.y[i] = 0;

	}
	
}

waveObj.prototype.born = function(x , y)
{
	for ( var i = 0 ; i < this.num ; i++)
	{	
		if (!this.alive[i])
		{
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 0;
			this.alive[i] = true;
			break;
		}
	}
	
}

waveObj.prototype.draw = function()

{	
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "rgb(255,255,255)";
	

	for (var i = 0 ; i < this.num; i++)

		if (this.alive[i]) 

		{   
			
			this.r[i] += deltaTime * 0.05 ;

			if(this.r[i] > 50)
			{
				this.alive[i] = false;
				break;
			}

			this.alpha[i] =  0.5 - this.r[i] * 0.01 ;
			ctx1.strokeStyle = "rgba(255,255,255," + this.alpha[i] + ")";
			ctx1.beginPath();
			ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
			ctx1.closePath();
			ctx1.stroke();
		}

	ctx1.restore();
}