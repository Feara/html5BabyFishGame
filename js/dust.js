var dustObj = function()
{
	this.x = [];
	this.y = [];
	this.amp = [];
	this.pic = [];
	this.NO = [];
	this.num ;
	this.alpha;
}

dustObj.prototype.init = function()
{
	this.num = 20;

	for (var i = 0; i < this.num; i++) 
	{
		this.x[i] = canWidth * Math.random();
		this.y[i] = canHeight * Math.random();
		this.amp[i] = 20 + Math.random() * 10;
		this.NO[i] = Math.floor(Math.random() * 7);   //[0-7]
		this.pic[i] = new Image();
		this.pic[i].src = "src/dust" + this.NO[i] +".png";
	}
	this.alpha = 0 ;

		
}

dustObj.prototype.draw = function()
{
	this.alpha += deltaTime * 0.001;
	var sinalpha = Math.sin(this.alpha);
	
	for (var i = 0; i < this.num; i++) 
	{

		ctx1.drawImage(this.pic[i], this.x[i] + sinalpha * this.amp[i], this.y[i])
	}
	
}