var fruitObj = function()
{

	this.alive = [];
	this.x = [];//果实位置
	this.y = [];	
	this.l = [];//果实大小
	this.fruitType = [];
	this.spd = [];

	this.orange = new Image();
	this.blue = new Image();

}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function()
{

	for(var i = 0; i < this.num; i++)
	{

		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.spd[i] = Math.random() * 0.01 + 0.005;  //[0.005-0.015]
		this.fruitType[i] = "";

	}
	this.orange.src = "src/fruit.png";
	this.blue.src = "src/blue.png"
}

fruitObj.prototype.draw = function(){

	for(var i = 0; i < this.num; i++)
	{

		if( this.alive[i] = true)
		{	
			if (this.fruitType[i] == "blue")
				{
					var pic = this.blue;
				}
			else 
				{
					var pic = this.orange;
				}
				
			if( this.l[i] < 14)
			{
				this.l[i] += this.spd[i] * deltaTime;
			}
			else
			{
				this.y[i] -= this.spd[i]* 5 *deltaTime;
			}

			ctx2.drawImage(pic, this.x[i] - this.l[i]*0.5 + 50 * ane.sinbeta, this.y[i] - this.l[i]*0.5, this.l[i] ,this.l[i] )	//drax
			
			if(this.y[i] < 10){
				this.alive[i] = false;
			}
		}
	}
}

fruitObj.prototype.born = function(i)
{

	var aneid = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.headx[aneid];
	this.y[i] = ane.heady[aneid];
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if (ran < 0.1)
	{
		this.fruitType[i] = "blue";
    }
	else
	{
		this.fruitType[i] = "orange"; 
	}
}

fruitObj.prototype.dead = function(i)
{
	this.alive[i] = false;
}

function fruitMonitor()
{
	var num = 0;
	for( var i = 0; i < fruit.num; i++)
	{
		if (fruit.alive[i]) {num++};
	}
	if(num < 20)
	{
		sendFruit();
		return;
	}
}

function sendFruit()
{
	for (var i = 0; i < fruit.num; i++) 
	{
		
		if(!fruit.alive[i])
		{
			fruit.born(i);
			return;
		}
	}
}
